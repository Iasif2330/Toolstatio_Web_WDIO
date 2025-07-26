pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // Your Node.js setup
  }

  stages {
    stage('Conditional Build') {
      when {
        anyOf {
          expression { env.CHANGE_ID == null }          // Not a PR build
          expression { env.CHANGE_STATE == 'MERGED' }   // PR has been merged
        }
      }
      stages {
        stage('Checkout') {
          steps {
            checkout scm
          }
        }

        stage('Debug Env') {
          steps {
            sh 'printenv | grep CHANGE || true'
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

        stage('Generate Allure Report') {
          steps {
            sh 'allure generate allure-results --clean -o allure-report || true'
          }
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'

      // Publish Allure report inside Jenkins UI (requires Allure Jenkins plugin)
      allure([
        results: [[path: 'allure-results']]
      ])
    }
  }
}