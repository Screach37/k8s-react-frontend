#!/bin/bash

#_Change_Working_Directory
cd ${DESTINATION_PATH}

#_Delete_Old_PM2_Service
#sudo pm2 delete Frontend
#sudo pm2 start server.js --name Frontend
sudo pm2 delete ${SERVICE_NAME}
sudo pm2 start server.js --name ${SERVICE_NAME}
