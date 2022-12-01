const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = [
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      MiniCssExtractPlugin.loader
    ],
  },
  {
    test: /\.scss$/,
    use: [
      // MiniCssExtractPlugin.loader,
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      'sass-loader',
    ]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ],
      }
    },
  },
  {
    test: /\.(mov|mp4|jpg|png|webm)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }  
      }
    ]
  }
]