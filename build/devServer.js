/**
 * Created by lenovo on 2017/11/9.
 * 开发环境热加载服务器
 */
const devConfig = require('./webpack.dev.config');
const webpack = require('webpack');
// 热加载插件
const hotMiddleware = require('webpack-hot-middleware');
// 热更新插件
const devMiddleware = require('webpack-dev-middleware');
const express = require('express');

// 编译配置文件
const compiler = webpack(devConfig);

const app = express();

// 热加载中间件
const webpackHot = hotMiddleware(compiler, {});
// 本地开发中间件
const webpackDev = devMiddleware(compiler, {
  noInfo: true
});

app.use(webpackHot);

app.use(webpackDev);

app.listen(8089, function() {
  console.log('server start at:  localhost:8089');
});



