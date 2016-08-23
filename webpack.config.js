var webpack = require('webpack')
module.exports = {
  entry: ['./index.js', './css/main.scss'],
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: __dirname + '/public'
  },

  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
}
