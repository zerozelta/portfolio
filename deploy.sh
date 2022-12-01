#!/bin/bash
set -e

APP_DIR=/var/www/aldocesar.com
PM2_APP=aldocesar.com

### Automation steps ###
set -x

cd $APP_DIR
git pull

# install dependencies
npm install --force
# Build source
npm run build
# Restart service
pm2 restart $PM2_APP