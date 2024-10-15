const tsConfig = require('@yimicat/eslint-config-ts');
const eslintPluginSvelte = require('eslint-plugin-svelte');

module.exports = [
  ...tsConfig,
  {
    plugins: {
      svelte: eslintPluginSvelte,
    },
    rules: {
      ...eslintPluginSvelte.configs['flat/recommended'],
    },
  },
];
