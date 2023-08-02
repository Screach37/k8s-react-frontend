#!/bin/bash

# Define your variables here
DESTINATION_PATH="/home/ec2-user/demo"
DOCUMENT_ROOT="/demo"
SERVICE_NAME="demo-lms-frontend"

# Create destination directory if not present
mkdir -p "${DESTINATION_PATH}"

# Use the retrieved variables as needed in your script
mkdir -p "${DOCUMENT_ROOT}"
cd "${DOCUMENT_ROOT}"

# Update and set Node.js version (if needed)
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

# Download Node.js and NPM (if needed)
# yum -y install nodejs npm

# Download PM2
npm install pm2@latest -g

