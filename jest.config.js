module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '/Users/elizaveta.razumenko/Desktop/reactNativeApp/src/jest/setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|native-base|react-native-svg)',
  ],
};
