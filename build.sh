#!/bin/bash

# build yew
wasm-pack build --target web --out-name wasm --out-dir ./docs
# build scss
sh ./css.sh
# remove .gitignore for pushing deploy
rm -rf ./docs/.gitignore