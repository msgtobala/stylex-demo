const { merge } = require('webpack-merge');
const StylexPlugin = require('@stylexjs/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StylexPlugin({
      filename: 'styles.css',
      dev: false,
      runtimeInjection: false,
      classNamePrefix: 'x',
      useRemForFontSize: false,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: '../src',
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
