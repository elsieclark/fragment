const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/pages/home.tsx",
  output: {
    filename: "./[name].[contenthash:6].bundle.js",
    chunkFilename: '[name].[contenthash:6].bundle.js',
    path: path.join(__dirname, "/public"),
    publicPath: '/'
  },
  // Enable sourcemaps for debugging webpack's output.
  //devtool: "eval",
  mode: 'production',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
     {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          { loader: "less-loader" },
        ],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // Handle .ts and .tsx file via ts-loader.
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.html$/, loader: 'html-loader' },
      
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'custom_template',
        template: 'template.html',
    }),
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
  ],
};
