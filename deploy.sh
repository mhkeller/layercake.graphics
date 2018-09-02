#!/usr/bin/env bash

cd export && git init
git add -A
git commit -am 'init'
git remote add origin https://github.com/mhkeller/layercake.graphics.git
git push origin master:gh-pages -f
