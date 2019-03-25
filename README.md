# frontend_nuxt

> My wondrous Nuxt.js project

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


#性能优化
``` bash
一个不错的nuxt项目：http://www.fly63.com/
1.对文件的压缩
2.不加载不必要的资源
3.webpack部署的时候 dev 环境与 线上环境分离

```

# 踩坑之路
1.jenkins部署代码
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
2.添加scss
``` bash
npm install sass-loader postcss-loader style-loader css-loader --save-dev 
cnpm install node-sass  
在 .vue文件中 这个写
<style lang="scss" scoped> 

```
3.接口代理
``` bash
使用代理
https://zh.nuxtjs.org/faq/http-proxy

npm i @nuxtjs/proxy -D
在 nuxt.config.js 配置文件中添加对应的模块，并设置代理

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://example.com',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  } 
axios:
https://www.kancloud.cn/yunye/axios/234845
```
