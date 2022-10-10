pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
      bat '      steps {'
                bat 'npm run build'
                bat 'npm install'
            }
        }
        
        stage('Deploy') {
                        steps {
                            dir ("jenkins"){
                            bat 'npm start'
                            input message: 'Finished using the web site? (Click "Proceed" to continue)'
                            }
                            }
                        }
    }
}
