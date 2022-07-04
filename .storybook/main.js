const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
    '@storybook/preset-scss',
    '@storybook/addon-backgrounds',
  ],
  typescript: {
    reactDocgen: 'none',
  },
  framework: '@storybook/react',
  webpackFinal: async config => {
    ;(config.module.rules = [...config.module.rules]), config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
