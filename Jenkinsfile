node("docker") {
     
    stage('checkout code') {
        checkout scm
        sh 'ls -l'
    }
    
    stage('check docker version') {
        sh 'docker version'    
    }
    
    stage('docker build') {
        sh 'docker build -t my-app .'
    }
    
    stage('show docker containers and images') {
        sh 'docker ps -a'
        sh 'docker images'
    }

    stage('docker deploy')  {
        sh "docker-compose down --remove-orphans"
        sh "docker-compose up -d --force-recreate"
    }
}

