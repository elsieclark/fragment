module.exports = {
    parser:  '@typescript-eslint/parser',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    extends:  [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        sourceType:  'module',
    },
    'plugins': [
        'prettier',
        'react',
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'react/jsx-uses-vars': 1,
        '@typescript-eslint/no-unused-vars': ["error", { "varsIgnorePattern": '^h$' }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'prettier/prettier': 'error',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': 1,
        '@typescript-eslint/explicit-member-accessibility': 'no-public',
    }
};