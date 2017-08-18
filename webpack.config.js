var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWwebpackPlugin = require('html-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
});

const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './src/js/app.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options:{
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      use: extractPlugin.extract({
        use: [ 'css-loader', 'sass-loader' ]
      })
    },
    {
      test: /\.(woff|woff2)$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    },
    {
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg|ico)$/,
      use: 'file-loader?name=images/[name].[ext]'
    },
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWwebpackPlugin({
      templeate: 'src/index.html',
      title: 'Star Saga'
    }),
    require('autoprefixer'),
    // new webpack.optimize.UglifyJsPlugin({
    //   //...
    // }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'bundle.js.map',
      exclude: ['/node_modules/','vendor.js']
    })
  ]
};
