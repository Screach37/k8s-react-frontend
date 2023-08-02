#!/bin/bash

# Retrieve the values from AWS Systems Manager Parameter Store
DESTINATION_PATH=$(aws ssm get-parameter --name "/MyApp/DESTINATION_PATH" --query "Parameter.Value" --output text)
DOCUMENT_ROOT=$(aws ssm get-parameter --name "/MyApp/DOCUMENT_ROOT" --query "Parameter.Value" --output text)
SERVICE_NAME=$(aws ssm get-parameter --name "/MyApp/SERVICE_NAME" --query "Parameter.Value" --output text)

# Export the variables
export DESTINATION_PATH
export DOCUMENT_ROOT
export SERVICE_NAME

