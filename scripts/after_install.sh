#!/bin/bash

# Retrieve the values from AWS Systems Manager Parameter Store or pass them as arguments
DESTINATION_PATH="$1"
DOCUMENT_ROOT="$2"
SERVICE_NAME="$3"

#source scripts/config.sh

# Use the retrieved variables as needed in your script
cd "${DESTINATION_PATH}"

# Remove unused code
rm -rf node_modules
rm -rf build

# Install node modules and make React build
npm install
npm run build
cp -rf "${DESTINATION_PATH}/build/"* "${DOCUMENT_ROOT}"

