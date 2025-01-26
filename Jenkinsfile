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
                script {
                    githubChecks(
                        name: 'Jenkins CI',
                        status: 'in_progress'
                    )
                }
                checkout scm
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
        githubStatus(
            context: 'continuous-integration/jenkins',
            description: 'The build succeeded!',
            status: 'SUCCESS'
        )
    }
    failure {
        githubStatus(
            context: 'continuous-integration/jenkins',
            description: 'The build failed!',
            status: 'FAILURE'
        )
    }
}
}
