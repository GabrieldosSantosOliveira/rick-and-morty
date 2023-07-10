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
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/data': './src/data',
            '@/domain': './src/domain',
            '@/hooks': './src/hooks',
            '@/errors': './src/errors',
            '@/infra': './src/infra',
            '@/interfaces': './src/interfaces',
            '@/main': './src/main',
            '@/routes': './src/routes',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/shared': './src/shared',
            '@/styles': './src/styles',
            '@/ui': './src/ui',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
