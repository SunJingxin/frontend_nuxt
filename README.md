# frontend_nuxt

> My splendiferous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# 踩坑之路

1
``` bash
echo $PATH
node -v 
npm  -v
cd /staticweb/service
rm -rf frontend_nuxt

mv /root/.jenkins/workspace/frontend_nuxt  /staticweb/service
cd frontend_nuxt

npm  install
cnpm install node-sass
npm run build
pm2 restart server/index.js

```
