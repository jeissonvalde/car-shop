const path = require('path');
const express = require('express');
module.exports = {
  open: true,
  port: 3000,
  // compress: true,
  // hot: true,
  onAfterSetupMiddleware: function (devServer) {
    if (!devServer) {
      throw new Error('webpack-dev-server is not defined')
    }

    // Try url path
    // devServer.app.get('/producto', (req, res) => {
    //   res.send(path.join(__dirname, '../public/index.html'))
    // })
  },
}