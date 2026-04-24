# 我的第一个 VitePress 页面

这是一个用来理解 VitePress 工作原理的示例文档。

## VitePress 做了什么？

这个 `.md` 文件会经过以下步骤变成网页：

1. **Markdown 解析**：将 Markdown 语法转换为 HTML
2. **转换为 Vue 组件**：HTML 被包裹进 `<template>`，成为一个 `.vue` 文件
3. **Vite 打包**：Vue 组件被编译为 JavaScript
4. **SSG 静态生成**：在 Node.js 环境中预渲染为完整的 HTML 文件

## Markdown 基本语法演示

### 文字样式

- **加粗文字**
- *斜体文字*
- `行内代码`

### 代码块

```js
// 这是一段 JavaScript 代码
const greeting = "Hello, VitePress!";
console.log(greeting);
```

### 表格

| 文件 | 对应路由 |
|------|---------|
| `docs/README.md` | `/` |
| `docs/sample.md` | `/sample.html` |

### 提示容器（VitePress 扩展语法）

::: tip 提示
这是 VitePress 特有的提示容器语法，普通 Markdown 不支持。
:::

::: warning 注意
VitePress 在标准 Markdown 基础上扩展了很多功能。
:::

## 下一步

可以尝试修改这个文件，保存后浏览器会**自动刷新**，这就是热更新（HMR）的效果。
VitePress 基于 Vite 构建，HMR 速度比 VuePress 更快。

