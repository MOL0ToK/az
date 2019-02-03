// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // IDEA: Не использую конфиг standard,
  // потому что он затрагивает оформление кода, а не правила
  extends: 'eslint:recommended',
  plugins: ['html'],
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js',
      },
    },
  },
  // IDEA: Все жизненно важные правила должны быть здесь
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-empty': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^h$' }],
    'no-var': 1,
    'prefer-const': 1,
    'quotes': [1, 'single', { avoidEscape: true }],
    'semi': 1,
  },
}
