import baseConfig from '@yimicat/eslint-config-base'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  ...baseConfig,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          usePrettierrc: true,
        },
      ],
    },
  },
]
