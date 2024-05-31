const { getDefaultConfig } = require('@react-native/metro-config');
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});
module.exports = config;
