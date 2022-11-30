const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  emitOnErrors: true,
  innerGraph: false,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
      },
    }),
  ],
  providedExports: false,
  realContentHash: false
}