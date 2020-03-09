// NOTE: hack that reads the jest config defined in vue-cli, so that I can reproduce it.
const config = require('@vue/cli-plugin-unit-jest/jest-preset')

// overrides with 'vue-i18n-jest
config['transform']['^.+\\.vue$'] = 'vue-i18n-jest'

module.exports = config
