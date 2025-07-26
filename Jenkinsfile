pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // Your Node.js setup in Jenkins
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
            // use ci if you have a package-lock.json; otherwise keep npm install
            sh 'npm ci || npm install'
          }
        }

        stage('Run WDIO Tests') {
          steps {
          sh 'npx wdio run wdio.conf.js'
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

      // Try to publish the report with the Jenkins Allure plugin if it’s configured,
      // otherwise just archive the generated HTML so the build still passes.
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