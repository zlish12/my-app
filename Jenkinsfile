node("docker") {
    
    stage('checkout code') {
        checkout scm
        sh 'ls -l'
    }
    
    stage('test something') {
        sh 'docker version'    
    }
    
    stage('docker build') {
        sh 'docker build -t my-app .'
    }
    
    stage('finish') {
        sh 'docker ps -a'
    }
}

