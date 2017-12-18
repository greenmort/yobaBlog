const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: '/node_modules',
        loaders: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loaders: 'eslint-loader'
        // exclude: 'node_modules'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            }
          },
          /* 'file-loader', */
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.css')]
};

module.exports = config;
