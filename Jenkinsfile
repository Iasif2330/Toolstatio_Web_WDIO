pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // or your NodeJS tool name
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run WDIO Tests') {
      steps {
        sh 'npx wdio run wdio.conf.js'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'
    }
  }
}