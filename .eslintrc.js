module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  env: {
    jest: true,
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'return', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },

      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],

    'import/named': 'error',
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'react/no-unstable-nested-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
  },
};
