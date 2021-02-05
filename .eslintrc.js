module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '_' }],
    'node/no-path-concat': 'off'
  }
}
