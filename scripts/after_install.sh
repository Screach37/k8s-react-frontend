#!/bin/bash

# Retrieve the values from AWS Systems Manager Parameter Store
DESTINATION_PATH=$(aws ssm get-parameter --name "/MyApp/DESTINATION_PATH" --query "Parameter.Value" --output text)
DOCUMENT_ROOT=$(aws ssm get-parameter --name "/MyApp/DOCUMENT_ROOT" --query "Parameter.Value" --output text)

# Use the retrieved variables as needed in your script
cd "${DESTINATION_PATH}"

# Remove unused code
rm -rf node_modules
rm -rf build

# Install node modules and make React build
npm install
npm run build
cp -rf "${DESTINATION_PATH}/build/*" "${DOCUMENT_ROOT}"

