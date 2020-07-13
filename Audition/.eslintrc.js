module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'no-restricted-syntax': 0,
    'no-restricted-globals': ['error', 'fdescribe'],
  },
};