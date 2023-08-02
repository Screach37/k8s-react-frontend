#!/bin/bash

#source scripts/config.sh
# Retrieve the values from AWS Systems Manager Parameter Store or pass them as arguments

DESTINATION_PATH="$1"
DOCUMENT_ROOT="$2"
SERVICE_NAME="$3"

# Create destination directory if not present
#mkdir -p "${DESTINATION_PATH}"

# Use the retrieved variables as needed in your script
mkdir -p "${DOCUMENT_ROOT}"
cd "${DOCUMENT_ROOT}"

# Update and set Node.js version (if needed)
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

# Download Node.js and NPM (if needed)
# yum -y install nodejs npm

# Download PM2
npm install pm2@latest -g

