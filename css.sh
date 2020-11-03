#!/bin/bash

date
echo '=========='

CSS_DIR=./docs/css
SASS_DIR=./scss

mkdir -p "$CSS_DIR"

echo "cat ${SASS_DIR}/*.scss | sassc > ${CSS_DIR}/index.css"
cat "${SASS_DIR}"/*.scss | sassc > "${CSS_DIR}/index.css"
