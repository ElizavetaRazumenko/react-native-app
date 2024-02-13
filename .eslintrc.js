module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/named': 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'no-irregular-whitespace': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
  },
};
