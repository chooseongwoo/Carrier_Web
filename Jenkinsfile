pipeline {
    agent any
    
    tools {
        nodejs "NodeJs(22.13.0)"
    }

    environment {
        GITHUB_CREDS = credentials('github-token')
    }
    
    stages {
        
        stage('Setup pnpm') {
            steps {
                sh 'npm install -g pnpm'
            }
        }
        
        stage('Build') {
            steps {
                sh 'pnpm install'
                sh 'pnpm run build'
            }
        }
        
        stage('Deploy') {
            when {
                expression { env.BRANCH_NAME == 'main' }
            }
            steps {
                sh 'sudo cp -r dist/* /home/jamkris/Documents/web/Carrier'
                sh 'sudo systemctl restart nginx'
            }
        }
    }
    
    post {
        success {
            publishChecks name: 'default',
                title: 'Pipeline Check',
                summary: 'Build succeeded',
                text: 'All stages completed successfully',
                status: 'COMPLETED',
                conclusion: 'SUCCESS',
                detailsURL: env.BUILD_URL,
                actions: [],
                annotations: []
        }
        failure {
            publishChecks name: 'default',
                title: 'Pipeline Check',
                summary: 'Build failed',
                text: 'Check pipeline logs for details',
                status: 'COMPLETED',
                conclusion: 'FAILURE'
        }
    }
}
