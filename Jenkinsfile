#!groovy

version       = "0.0.${env.BUILD_NUMBER}"
repo          = "zlish12"
image         = "$repo/my-app"
buildRepo     = "github.com/zlish12/my-app"

node('docker-slave') {
    stage('checkout') {
        checkout scm
    }
    
    def tag = "git-${gitCommit()}"

    stage('docker build/test') {
        sh "docker build -t $image:$tag . "
    }

    stage('docker publish') 
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'zlish12-login',
            usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD'] 
        ]) {
            sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
            sh "docker tag $image:$tag $image:latest"
            sh "docker push $image:latest"
    }

    stage('deploy') {
            sh "docker-compose down --remove-orphans"
            sh "docker-compose up -d --force-recreate"
    }
}

def gitCommit() {
    def commit = sh (returnStdout: true, script: "git rev-parse --short HEAD")
    return commit.trim()
}