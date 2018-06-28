node("docker") {
    docker.withRegistry('<<your-docker-registry>>', '<<your-docker-registry-credentials-id>>') {
    
        git url: "git@github.com:zlish12/my-app.git", credentialsId: 'b60d07ec-c5ca-4f24-8293-a89452792615'
    
        sh "git rev-parse HEAD > .git/commit-id"
        def commit_id = readFile('.git/commit-id').trim()
        println commit_id
    
        stage "build"
        def app = docker.build "your-project-name"
    
        stage "publish"
        app.push 'master'
        app.push "${commit_id}"
    }
}
