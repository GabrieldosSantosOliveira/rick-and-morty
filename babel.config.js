module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './src/assets',
            '@/constants': './src/constants',
            '@/data': './src/data',
            '@/domain': './src/domain',
            '@/infra': './src/infra',
            '@/main': './src/main',
            '@/shared': './src/shared',
            '@/ui': './src/ui',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
