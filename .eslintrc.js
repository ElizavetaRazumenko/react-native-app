module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/named': 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'react/no-unstable-nested-components': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
  },
};
