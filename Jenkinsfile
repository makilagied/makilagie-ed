pipeline {
    agent { label 'docker' }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        REGISTRY      = 'localhost:5000'
        IMAGE_NAME    = 'portfolio'
        GIT_CREDS_ID  = 'github-credentials'   // Jenkins credentials ID (username/token or SSH key) with push access
        COMPOSE_FILE  = 'docker-compose.yml'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                sh '''
                    npm ci
                    npm run build
                '''
            }
        }

        stage('Tag Release') {
            steps {
                script {
                    env.RELEASE_TAG = sh(script: "date +'%Y%m%d-%H%M%S'", returnStdout: true).trim()
                }
                sh "git tag ${RELEASE_TAG}"
                withCredentials([usernamePassword(credentialsId: env.GIT_CREDS_ID, usernameVariable: 'GIT_USER', passwordVariable: 'GIT_TOKEN')]) {
                    sh '''
                        REMOTE_URL=$(git config --get remote.origin.url | sed -E "s#https://##")
                        git push "https://${GIT_USER}:${GIT_TOKEN}@${REMOTE_URL}" "${RELEASE_TAG}"
                    '''
                }
            }
        }

        stage('Build Image') {
            steps {
                sh """
                    docker build -t ${REGISTRY}/${IMAGE_NAME}:${RELEASE_TAG} -t ${REGISTRY}/${IMAGE_NAME}:latest .
                """
            }
        }

        stage('Push Image') {
            steps {
                sh """
                    docker push ${REGISTRY}/${IMAGE_NAME}:${RELEASE_TAG}
                    docker push ${REGISTRY}/${IMAGE_NAME}:latest
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    IMAGE_TAG=${RELEASE_TAG} docker compose -f ${COMPOSE_FILE} pull
                    IMAGE_TAG=${RELEASE_TAG} docker compose -f ${COMPOSE_FILE} up -d
                """
            }
        }
    }

    post {
        success {
            echo "Deployed ${IMAGE_NAME}:${RELEASE_TAG} from ${REGISTRY}"
        }
        failure {
            echo 'Pipeline failed - check logs above.'
        }
    }
}
