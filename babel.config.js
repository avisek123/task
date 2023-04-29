module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          utils: './src/utils',
          components: './src/components',
          'components/core': './src/components/core',
          types: './src/types',
          configs: './src/configs',
          contexts: './src/contexts',
          hooks: './src/hooks',
          routes: './src/routes',
          screens: './src/screens',
          layouts: './src/layouts',
          constants: './src/constants',
          styles: './src/styles',
          features: './src/features',
          services: './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
