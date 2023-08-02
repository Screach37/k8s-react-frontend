#!/bin/bash

# Retrieve the values from AWS Systems Manager Parameter Store
DESTINATION_PATH=$(aws ssm get-parameter --name "/MyApp/DESTINATION_PATH" --query "Parameter.Value" --output text)
SERVICE_NAME=$(aws ssm get-parameter --name "/MyApp/SERVICE_NAME" --query "Parameter.Value" --output text)


# Use the retrieved variables as needed in your script
cd "${DESTINATION_PATH}"

# Delete old PM2 service and start the application
sudo pm2 delete "${SERVICE_NAME}"
sudo pm2 start server.js --name "${SERVICE_NAME}"

