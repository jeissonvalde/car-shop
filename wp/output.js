const path = require('path');
module.exports = {
  path: path.resolve(__dirname, '../public'),
  filename: '[name].[contenthash].bundle.js',
  clean: true
};