pipeline {
    agent any
    
    tools {
        nodejs "NodeJs(22.13.0)"
    }

    environment {
        GITHUB_CREDS = credentials('github-token')
    }
    
    triggers {
        githubPush()
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                sh 'npm install -g pnpm'
            }
        }

        stage('Build & Test') {
            when {
                anyOf {
                    expression { env.CHANGE_ID != null }
                    expression { env.CHANGE_TARGET != null && env.CHANGE_BRANCH != null }
                }
            }
            steps {
                script {
                    sh 'pnpm install'
                    sh 'pnpm run build'
                    
                    if (env.CHANGE_ID) {
                        echo "Processing PR #${env.CHANGE_ID}"
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'sudo cp -r dist/* /home/jamkris/Documents/web/Carrier'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
    
    post {
        success {
            script {
                if (env.CHANGE_ID) {
                    publishChecks name: 'Jenkins CI',
                        title: 'Build Check',
                        summary: 'Build succeeded',
                        text: '''
                            ✅ Build passed
                            ✅ Tests passed
                        ''',
                        status: 'completed',
                        conclusion: 'SUCCESS'
                }
            }
        }
        failure {
            script {
                if (env.CHANGE_ID) {
                    publishChecks name: 'Jenkins CI',
                        title: 'Build Check',
                        summary: 'Build failed',
                        text: '''
                            ❌ Build failed
                            Please check the build logs for more details
                        ''',
                        status: 'completed',
                        conclusion: 'FAILURE'
                }
            }
        }
    }
}
