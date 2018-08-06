cd export/layercake && git init
git add -A
git commit -am 'init'
git remote add origin https://github.com/mhkeller/layercake.git
git push origin master:gh-pages -f
