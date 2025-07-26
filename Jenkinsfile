pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // Use Node.js version named "Node 24 LTS" configured in Jenkins
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
            // Checkout source code from SCM (GitHub, etc.)
            checkout scm
          }
        }

        stage('Debug Env') {
          steps {
            // Print environment variables containing 'CHANGE' to verify PR-related info
            sh 'printenv | grep CHANGE || true'
          }
        }

        stage('Install Dependencies') {
          steps {
            // Install npm packages required by the project
            sh 'npm install'
          }
        }

        stage('Run WDIO Tests') {
          steps {
            // Run WebDriverIO tests using the specified config file
            sh 'npx wdio run wdio.conf.js'
          }
        }
      }
    }
  }

  post {
    always {
      // This block runs regardless of build result to indicate pipeline completion
      echo 'Pipeline finished'
    }
  }
}