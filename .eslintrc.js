module.exports = {
    extends: [
        'codingitwrong'
    ],
    parser: 'babel-eslint',
    plugins: [
        'cypress',
        'jest',
        'react',
    ],
    env: {
        'es6': true,
        'browser': true,
        'jest/globals': true,
        'cypress/globals': true,
        "jquery": true
        },
};