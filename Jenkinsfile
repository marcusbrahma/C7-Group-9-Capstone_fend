pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
         }
         }
    environment {
        CI = false npm run build
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install react-scripts'
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
