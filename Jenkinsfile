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
        sh 'docker run -d -p 80:3000 --name=my-app-1 my-app' 
    }
    
    stage('show docker containers and images') {
        sh 'docker ps -a'
        sh 'docker images'
    }
}