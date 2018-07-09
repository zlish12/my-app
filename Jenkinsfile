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
        sh 'docker run -it \ -v ${PWD}:/usr/src/app \ -v /usr/src/app/node_modules 
            \ -p 3000:3000 \ --rm \ my-app'
    }
    
    stage('show docker containers and images') {
        sh 'docker ps -a'
        sh 'docker images'
    }
}

