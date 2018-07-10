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
        sh 'docker-compose down --remove-orphans'
        sh 'docker-compose up -d --force-recreate'
        /*
        sh 'docker stop $(docker ps -aq) && docker rm $(docker ps -aq)'
        sh 'docker run -d -p 80:80 --name=my-app my-app'*/
    }
    
    stage('show docker containers and images') {
        sh 'docker ps -a'
        sh 'docker images'
    }
}