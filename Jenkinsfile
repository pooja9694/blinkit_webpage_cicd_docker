pipeline{
    agent any

    environment {
        DOCKERHUB_USERNAME = 'pooja9694'
        DOCKER_IMAGE = 'blinkit-brocode'
    }
    stages{
        stage("docker version") { 
            steps{
                  sh "sudo docker --version"
            }
        }
        stage(:"Build Docker Image") {
            steps{
                sh "sudo docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE} ."
            }
        }
         stage("Docker Image") {
            steps{
                 sh "sudo docker images"
                // sh "sudo docker run -d -p 80:80 --name ${DOCKER_IMAGE} ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}"
            }
        }
    }
}