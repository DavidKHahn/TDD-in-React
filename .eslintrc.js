module.exports = {
    extends: [
        'codingitwrong',
        "plugin:cypress/recommended"
    ],
    parser: 'babel-eslint',
    plugins: [
        'jest',
        'react',
        'cypress'
    ],
    env: {
        'browser': true,
        'jest/globals': true
    }
}