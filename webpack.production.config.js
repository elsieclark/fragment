/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './src/pages/home.tsx',
        vendor: ['./scripts/vendor.js'],
    },
    output: {
        filename: '[name].[contenthash:6].bundle.js',
        chunkFilename: '[name].[contenthash:6].bundle.js',
        path: path.join(__dirname, '/public'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Templates: path.resolve(__dirname, 'src/templates/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
        },
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            namedExport: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            namedExport: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            namedExport: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
            },
            { test: /\.html$/, loader: 'html-loader' },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]preact[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'custom_template',
            template: 'template.html',
        }),
        new webpack.DefinePlugin({
            //<--key to reduce React's size
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
        }),
        new TypedCssModulesPlugin({
            globPattern: '{src/**/*.scss,src/**/*.less,src/**/*.css}',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:6].css',
            chunkFilename: '[id].[contenthash:6].css',
        }),
        new Visualizer({
            filename: '../stats.html',
        }),
    ],
};
