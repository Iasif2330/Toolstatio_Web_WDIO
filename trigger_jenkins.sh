#!/bin/bash

# Jenkins credentials and job details
JENKINS_URL="http://localhost:8080"
USER="asif_2330"
API_TOKEN="11df4da57171bc0505c7bad1a2c52d187e"
JOB_NAME="WDIO-Pipeline"
JOB_TOKEN="WDIO-POM"

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Get CSRF Crumb
echo -e "${YELLOW}Fetching Jenkins crumb...${NC}"
CRUMB=$(curl -s -u $USER:$API_TOKEN "$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)")
CRUMB_HEADER=""
[ -n "$CRUMB" ] && CRUMB_HEADER="-H $CRUMB"

# Step 2: Trigger the Build
echo -e "${YELLOW}Triggering build for job: $JOB_NAME${NC}"
curl -s -u $USER:$API_TOKEN $CRUMB_HEADER -X POST "$JENKINS_URL/job/$JOB_NAME/build?token=$JOB_TOKEN"

# Step 3: Get the Build Number
echo -e "${YELLOW}Waiting for new build to start...${NC}"
sleep 5
BUILD_NUMBER=$(curl -s -u $USER:$API_TOKEN "$JENKINS_URL/job/$JOB_NAME/lastBuild/api/json" | jq '.number')
echo -e "${GREEN}Triggered Build Number: $BUILD_NUMBER${NC}"

# Step 4: Wait Until Build Starts
echo -e "${YELLOW}Waiting for build #$BUILD_NUMBER to start...${NC}"
while true; do
  BUILD_STATUS=$(curl -s -u $USER:$API_TOKEN "$JENKINS_URL/job/$JOB_NAME/$BUILD_NUMBER/api/json" | jq -r '.building')
  if [ "$BUILD_STATUS" == "true" ]; then
    echo -e "${YELLOW}Build #$BUILD_NUMBER is running. Streaming logs...${NC}"
    break
  fi
  echo -e "${YELLOW}Build not started yet...${NC}"
  sleep 2
done

# Step 5: Stream Console Output
CONSOLE_URL="$JENKINS_URL/job/$JOB_NAME/$BUILD_NUMBER/logText/progressiveText"
START=0
while true; do
  RESPONSE=$(curl -s -u $USER:$API_TOKEN --get --data "start=$START" "$CONSOLE_URL")
  echo -n "$RESPONSE"
  
  SIZE=$(curl -sI -u $USER:$API_TOKEN --get --data "start=$START" "$CONSOLE_URL" | grep -i "X-Text-Size" | awk '{print $2}' | tr -d '\r')
  
  if [ "$START" == "$SIZE" ]; then
    RESULT=$(curl -s -u $USER:$API_TOKEN "$JENKINS_URL/job/$JOB_NAME/$BUILD_NUMBER/api/json" | jq -r '.result')
    if [ "$RESULT" != "null" ]; then
      if [ "$RESULT" == "SUCCESS" ]; then
        echo -e "\n${GREEN}Build #$BUILD_NUMBER completed successfully!${NC}"
      else
        echo -e "\n${RED}Build #$BUILD_NUMBER completed with status: $RESULT${NC}"
      fi
      break
    fi
  fi
  START=$SIZE
  sleep 2
done