# site-prototype-vue

This repository contains the code for my personal site: https://michaeldsilva.com/

My site is hosted through github pages and the live repo is located here: https://github.com/michaelddsilva/michaelddsilva.github.io

My site is implemented with Vue.js and uses BootstrapVue.

The icons i'm using in site sections are from Icons8.


## Comands to force push onto master branch of site repo (michaelddsilva.github.io)
#### I decided to do this because any meaningful commit information can be found in this repository, and the commit history from the old version of my site can be found in the branch named "old" (located in my site's repo). 

cd mysite

npm run build

cd dist

git init

git add .

git commit -m "Update"

git remote add origin https://github.com/michaelddsilva/michaelddsilva.github.io.git

git push -u origin master --force

cd ..
