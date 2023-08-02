#!/bin/bash

source ./config.sh


# Use the defined variables as needed in your script
cd "${DESTINATION_PATH}"

# Delete old PM2 service and start the application
sudo pm2 delete "${SERVICE_NAME}"
sudo pm2 start server.js --name "${SERVICE_NAME}"

