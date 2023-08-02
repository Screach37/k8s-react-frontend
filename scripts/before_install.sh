#!/bin/bash

# Retrieve the values from AWS Systems Manager Parameter Store
DESTINATION_PATH=$(aws ssm get-parameter --name "/MyApp/DESTINATION_PATH" --query "Parameter.Value" --output text)
DOCUMENT_ROOT=$(aws ssm get-parameter --name "/MyApp/DOCUMENT_ROOT" --query "Parameter.Value" --output text)
SERVICE_NAME=$(aws ssm get-parameter --name "/MyApp/SERVICE_NAME" --query "Parameter.Value" --output text)


# Use the retrieved variables as needed in your script
mkdir -p "${DOCUMENT_ROOT}"
cd "${DOCUMENT_ROOT}"

# Update and set Node.js version (if needed)
#curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

# Download Node.js and NPM (if needed)
# yum -y install nodejs npm

# Download PM2
npm install pm2@latest -g

