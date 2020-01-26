module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    // desable error in style
    'no-use-before-define': ['error', { variables: false }],
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          '/pages/',
          [('parent', 'sibling', 'index')],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
