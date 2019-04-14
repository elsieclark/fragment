module.exports = ({ file }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: [
        require('postcss-preset-env')(),
        require('autoprefixer')(),
    ]
});
