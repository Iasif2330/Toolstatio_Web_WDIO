pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // Your Node.js setup in Jenkins
    allure 'AllureCLI'   // Allure CLI tool installed in Jenkins
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
              catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                sh 'npx wdio run wdio.conf.js'
              }
            }
          }
        }

        // stage('Run API Tests') {
        //   steps {
        //     script {
        //       catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
        //         sh 'npm run test:api'
        //       }
        //     }
        //   }
        // }

        stage('Run Performance Tests') {
          when {
            anyOf {
              branch 'main'
              branch 'performance-test-script'
            }
          }
          environment {
            PATH = "/opt/homebrew/bin:${env.PATH}"
          }
          steps {
            script {
              catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                sh 'npm run test:perf'
              }
            }
          }
        }

        stage('Generate Allure Report') {
          steps {
            sh '''
              # Ensure allure-commandline is available locally
              if [ ! -d node_modules/allure-commandline ]; then
                npm i -D allure-commandline
              fi

              # Generate the HTML report
              npx allure generate allure-results --clean -o allure-report
            '''
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