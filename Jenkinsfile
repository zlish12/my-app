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
        /*sh 'docker run -d -it -p 80:8080 --name=app-c zlish12/my-app npm run ec2 -- --host=0.0.0.0'*/
    }
    stage('docker run') {
        sh 'docker run --name my-app -it zlish12/my-app'
            /*sh "docker-compose down --remove-orphans"
            sh "docker-compose up -d --force-recreate"*/
    }
    
    stage('show docker containers and images') {
        sh 'docker ps -a'
        sh 'docker images'
    }
}