#!/bin/bash

# Define your variables here
DESTINATION_PATH="/home/ec2-user/demo"
DOCUMENT_ROOT="/demo"

# Use the retrieved variables as needed in your script
cd "${DESTINATION_PATH}"

# Remove unused code
rm -rf node_modules
rm -rf build

# Install node modules and make React build
npm install
npm run build
cp -rf "${DESTINATION_PATH}/build/"* "${DOCUMENT_ROOT}"

