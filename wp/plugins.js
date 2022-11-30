const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = function (params) {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html',
      title: params.appTitle
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].styles.css',
      chunkFilename: '[id].css',
    })
  ];
};