const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {TypedCssModulesPlugin} = require('typed-css-modules-webpack-plugin');

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
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
        ],
      },
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
    new TypedCssModulesPlugin({
      globPattern: '{src/**/*.scss,src/**/*.less,src/**/*.css}',
    }),
  ],
};
