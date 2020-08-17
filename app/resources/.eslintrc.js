// eslint-disable-next-line no-undef
module.exports = {
  extends: 'eslint-config-airbnb',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  globals: {
    document: false,
  },
};
