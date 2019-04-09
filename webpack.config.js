const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.tsx",
  output: {
    filename: "./[name].[contenthash:6].bundle.js",
    chunkFilename: '[name].[contenthash:6].bundle.js',
    path: path.join(__dirname, "/public"),
    publicPath: '/'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval",
  mode: 'production',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // Handle .ts and .tsx file via ts-loader.
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

