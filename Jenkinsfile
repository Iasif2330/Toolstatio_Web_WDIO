pipeline {
  agent any

  tools {
    nodejs 'Node 24 LTS' // Use Node.js version named "Node 24 LTS" configured in Jenkins
  }

  // Run this pipeline only if:
  // - This is NOT a pull request build (normal branch build)
  // - OR the pull request has been merged (CHANGE_STATE == 'MERGED')
  when {
    anyOf {
      expression { env.CHANGE_ID == null }          // Not a PR build
      expression { env.CHANGE_STATE == 'MERGED' }  // PR has been merged
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
        sh 'printenv | grep CHANGE'
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

  post {
    always {
      // This block runs regardless of build result to indicate pipeline completion
      echo 'Pipeline finished'
    }
  }
}