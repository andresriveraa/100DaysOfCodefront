const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'./index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module:{
    rules: [
      {
        test:/\.css$/,
        // use: 'css-loader'
        use:[
          // 'style-loader',
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
}