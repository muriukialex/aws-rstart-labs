#!/bin/sh

# run npm run dev through pm2
pm2 start npm -- run dev

# show logs
pm2 logs