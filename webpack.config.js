var path = require('path');
var SRCDIR = path.join(__dirname, '/client/src');
var DISTDIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRCDIR}/index.jsx`,
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: DISTDIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  stats: {
    errorDetails: true,
    colors: true,
    modules: true,
    reasons: true
  }
};