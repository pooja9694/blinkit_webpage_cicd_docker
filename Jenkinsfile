pipeline{
    agent any

    environment {
        DOCKERHUB_USERNAME = 'pooja9694'
        DOCKER_IMAGE = 'webapp'
        DOCKERHUB_REPO= 'blinkit-brocode'
        VERSION = '$BUILD_ID'
         CONTAINER_NAME = 'app'
        CONTAINER_PORT = '8003'
        REQUEST_PORT = '80'

    }
    stages{
        stage("docker version") { 
            steps{
                  sh "sudo docker --version"
            }
        }
        stage("Build Docker Image") {
            steps{
                sh "sudo docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage("Docker Tag") {    
            steps{
                sh """
                sudo docker tag ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:${VERSION}
                sudo docker tag ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:latest
                """
            }
        }
         stage("Docker Image") {
            steps{
                 sh "sudo docker images"
                // sh "sudo docker run -d -p 80:80 --name ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}"
            }
        }
        stage("Run Container"){
            steps{
                sh "sudo docker run -it -d --name ${CONTAINER_NAME} -p ${CONTAINER_PORT}:${REQUEST_PORT} ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:latest"
            }
            post {
                always {
                    echo "Docker container from Server"
                }
                success {
                    echo "Docker continer deployed successfully"
                }
                failure {
                    echo "Docker container is alreay Running"
                }
            }
            stage("Remove docker image locally") {
                steps {
                     sh "sudo docker rmi -f ${DOCKERHUB_USERNAME}/${DOCKERHUB_REPO}:${VERSION}"
            }
        }
    }
}