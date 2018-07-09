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
    
    stage('check running containers') {
        sh 'docker ps'
    }
}

