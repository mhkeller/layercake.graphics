#!/usr/bin/env bash

cd export && git init
git checkout -b gh-pages
git add -A
git commit -am 'init'
git remote add origin https://github.com/mhkeller/layercake.graphics.git
git push origin gh-pages -f
