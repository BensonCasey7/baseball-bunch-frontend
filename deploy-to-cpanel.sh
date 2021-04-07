#!/bin/bash

git pull
rm -r ../public_html/*
cp -R ./build/* ../public_html/
cp ./.htaccess ../public_html/

echo "Frontend Deployed! View at https://cs411baseball.web.illinois.edu/"
