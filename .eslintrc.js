module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/named': 'error',
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
