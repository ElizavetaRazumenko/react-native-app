module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
      },
    ],
  ],
};
