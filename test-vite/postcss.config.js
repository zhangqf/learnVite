const postcssPresetEnv = require('postcss-preset-env')
const postcssCustomProperties = require('postcss-custom-properties');
const postcssGlobalData = require('@csstools/postcss-global-data');
const path = require('path')
module.exports = {
  plugins: [
    postcssPresetEnv(),
    postcssGlobalData({
      files: [
        path.resolve(__dirname, 'variable.css')
      ]
    }),
    postcssCustomProperties()
  ]
}
