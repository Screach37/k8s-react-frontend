#!/bin/bash

#source scripts/config.sh
# Retrieve the values from AWS Systems Manager Parameter Store or pass them as arguments
DESTINATION_PATH="$1"
DOCUMENT_ROOT="$2"
SERVICE_NAME="$3"

# Use the defined variables as needed in your script
cd "${DESTINATION_PATH}"

# Delete old PM2 service and start the application
sudo pm2 delete "${SERVICE_NAME}"
sudo pm2 start server.js --name "${SERVICE_NAME}"

