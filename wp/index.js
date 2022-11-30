const entry = require('./entry');
const output = require('./output');
const rules = require('./rules');
const plugins = require('./plugins');
const devTool = require('./dev-tool');
const devServer = require('./dev-server');
const optimization = require('./optimization');

module.exports = function (params) {
  let mode = params.env === 'dev' ? 'development' : 'production'


  return {
    mode,
    entry,
    output,
    module: {
      rules,
      parser: {
        javascript: {
          commonjsMagicComments: true,
        },
      },
    },
    plugins: plugins(params),
    optimization,
    devtool: devTool(mode),
    devServer,
    resolve: {
      extensions: ['*', '.mjs', '.js', '.json']
    },
    // performance: {
    //   hints: false,
    //   maxEntrypointSize: 512000,
    //   maxAssetSize: 512000
    // }
  }
};