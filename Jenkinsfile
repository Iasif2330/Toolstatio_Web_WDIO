pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS'      // Your Node.js setup in Jenkins
    allure 'Allure'           // Your Allure CLI tool configured in Jenkins
  }

  options {
    timestamps()
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
            sh 'npm ci || npm install'
          }
        }

        stage('Run WDIO Tests') {
          steps {
            script {
              catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'npx wdio run wdio.conf.js'
              }
            }
          }
        }

        stage('Generate Allure Report') {
          steps {
            // Optional debug to verify allure CLI is found
            sh 'allure --version'

            // Generate Allure report using Jenkins-installed allure CLI
            sh 'allure generate allure-results --clean -o allure-report'
          }
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished'

      script {
        try {
          allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
          ])
        } catch (e) {
          echo "Allure Jenkins plugin not configured or CLI missing: ${e}"
          archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
        }
      }
    }
  }
}