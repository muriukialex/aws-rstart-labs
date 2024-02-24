#!/bin/sh

# run npm run start through pm2
pm2 start npm -- run start

# show logs
pm2 logs
