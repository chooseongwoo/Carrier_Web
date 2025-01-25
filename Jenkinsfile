void setBuildStatus(context, message, state) {
    step([
        $class: "GitHubCommitStatusSetter",
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: context],
        statusResultSource: [$class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]]]
    ])
}

pipeline {
    agent any
    
    tools {
        nodejs "NodeJs(22.13.0)"
    }

    environment {
        GITHUB_CREDS = credentials('github-token')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: env.BRANCH_NAME ?: 'main',
                    credentialsId: 'github-token',
                    url: 'https://github.com/Jing5s/Carrier_Web'
            }
        }
        
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
            githubChecks(
                name: 'Jenkins CI',
                conclusion: 'success'
            )
        }
        failure {
            githubChecks(
                name: 'Jenkins CI',
                conclusion: 'failure'
            )
        }
    }
}
