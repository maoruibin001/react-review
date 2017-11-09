/**
 * Created by lenovo on 2017/11/9.
 * webpack 基本配置。
 */
const path = require('path');
const webpack = require('webpack');
// 提取css文件插件
const ExtraTextPlugin = require('extract-text-webpack-plugin');
// 提取html文件插件
const HtmlPlugin = require('html-webpack-plugin');
// 彩色提示插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

/*
 * 根据给定的相对路径返回正确的绝对路径
 * @param  {String} dir  相对路径
 * @return {String} 绝对路径
 * */
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// webpack公用配置（生产和开发环境都需要）
const config = {
  // 单页面单入口配置
  entry: {
    'app': resolve('../src/index.js'),
    'vendor': ['react', 'react-dom']
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        // 此处需要和.babelrc的preset配合才能正常工作
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('../src')
      },
      {
        test: /\.tpl$/,
        loader: 'string-loader'
      },
      {
        // css提取并自动加上前缀，兼容IE8、firefox20 安卓4.4及以后
        test: /\.css$/,
        loader: ExtraTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: ["ie >= 8", "Firefox >= 20", "Android >= 4.4"]
                  })
                ]
              }
            }
          ]
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // 可以使用externals来优化打包速度，但是看不到打包过程，因此这里依旧采用传统打包方式
  // externals: {
  //   'react': 'window.React',
  //   'react-dom': 'window.ReactDOM'
  // },
  plugins: [

    new FriendlyErrorsPlugin(),
    new ExtraTextPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlPlugin({
      template: resolve('../public/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // 此处必须加上manifest，否则每次修改文件模块的时候公共模块hash也会变化
      names: ['vendor', 'manifest']
    }),
  ]
};

module.exports = config;