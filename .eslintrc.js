module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    strict: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'max-len': ['error', { code: 150 }],
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0, // we have used index with some text appended, where id is not present.
    'no-param-reassign': 0,
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
