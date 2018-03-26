const GlobalizePlugin = require('globalize-webpack-plugin')

module.exports = {
  webpack: (config) => {
    config.plugins.push(new GlobalizePlugin({
      production: false,
      developmentLocale: 'es',
      supportedLocales: [ 'en', 'es' ],
      messages: 'locales/[locale].json',
      output: 'globalize-compiled-data-[locale].[hash].js',
      tmpdirBase: '.'
    }))
    return config
  }
}