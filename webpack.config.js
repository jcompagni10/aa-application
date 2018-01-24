const path = require('path');
var webpack = require("webpack");
var plugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
  }),
  new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: true
  }
  })
];

plugins = plugins.concat( prodPlugins );


module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle2.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-maps',
  plugins,
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.node$/,
      loader: 'node-loader'
    }
    ]
  }
};
