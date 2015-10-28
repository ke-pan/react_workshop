const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: 'build/',
    filename: 'bundle.js',
    chunkFilename: '[id].[hash].js'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //   }
    // })
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
