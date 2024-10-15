# @yimicat/eslint-config-svelte

- 合理的默认配置
- 无需配合Prettier也能自动修复格式化
- 使用简单无需繁琐的添加配置

## 安装

```base
pnpm add -D @yimicat/eslint-config-svelte
```

## 配置eslint.config

```javascript
import yimicatEslintConfigSvelte from "@yimicat/eslint-config-svelte"

export default [
  ...yimicatEslintConfigSvelte,

  // {...}  you config
]
```

## 添加命令

```base
{
  "lint:fix": "eslint . --fix",
  "tsc": "tsc --noEmit --skipLibCheck",
}
```

## VS Code 自动修复

```base
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```
