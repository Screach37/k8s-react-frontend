#!/bin/bash

#_Change_Working_Directory
cd '${DESTINATION_PATH}'

#_Remove_Unused_Code
rm -rf node_modules
rm -rf build

#Install_node_modules_&_Make_React_Build
npm  install
npm run build
cp -rf '${DESTINATION_PATH}'/build/* '${DOCUMENT_ROOT}'
