/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

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
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
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
                    { loader: 'style-loader' },
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
                    { loader: 'style-loader' },
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
        minimize: false,
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
        new TypedCssModulesPlugin({
            globPattern: '{src/**/*.scss,src/**/*.less,src/**/*.css}',
        }),
        new Visualizer({
            filename: '../stats.html',
        }),
    ],
};
