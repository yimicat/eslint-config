# @yimicat/eslint-config-vue

- 合理的默认配置
- 无需配合Prettier也能自动修复格式化
- 使用简单无需繁琐的添加配置
- 支持Typescript，Vue3

## 安装

```base
pnpm add -D @yimicat/eslint-config-vue
```

## 配置eslint.config

```javascript
import yimicatConfig from "@yimicat/eslint-config-vue"

export default [
  ...yimicatConfig,

  // {...}  you config
]
```

## 添加命令

```base
{
  "lint:fix": "eslint . --fix",
  "type:check": "vue-tsc --noEmit --skipLibCheck",
}
```

## 集成vue-tsc

- 安装

```base
pnpm add -D vue-tsc
```

- 添加命令

```base
{
  "type:check": "vue-tsc --noEmit --skipLibCheck",
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
