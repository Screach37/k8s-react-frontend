#!/bin/bash

# Debugging statements
echo "Current working directory: $(pwd)"
echo "Is ${DESTINATION_PATH} directory present? $(ls -ld ${DESTINATION_PATH})"

#_Change_Working_Directory
mkdir "${DOCUMENT_ROOT}"
cd "${DOCUMENT_ROOT}"

#_Update_&_Set_Node_Version
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

#_Download_Node_&NPM
#yum -y install nodejs npm

#_Download_PM2
npm install pm2@latest -g
