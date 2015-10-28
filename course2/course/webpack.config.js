const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    // }})
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.resolve(__dirname, './src/'), loader: 'babel-loader'},
      {test: /\.png$/, loader: 'url-loader?limit=8196'},
      {test: /\.css$/, loader: 'style-loader!css-loader?modules'}
    ]
  }
}
