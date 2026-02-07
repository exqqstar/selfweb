# 响应式设计

> RN 用 Dimensions API 或 useWindowDimensions，Web 用 CSS 媒体查询（Tailwind 封装了它）。

## Tailwind 断点（Mobile First）

默认样式给手机，往大屏幕加前缀：

| 前缀 | 最小宽度 | 设备 |
|------|---------|------|
| (无) | 0px | 手机（默认） |
| `sm:` | 640px | 大手机 |
| `md:` | 768px | 平板 |
| `lg:` | 1024px | 笔记本 |
| `xl:` | 1280px | 桌面 |
| `2xl:` | 1536px | 大屏桌面 |

## 核心思路：先写手机，再加大屏样式

```html
<!-- 手机一列，平板两列，桌面三列 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- 手机隐藏侧边栏，桌面显示 -->
<aside class="hidden lg:block">

<!-- 手机小字，桌面大字 -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">

<!-- 手机垂直排列，桌面水平排列 -->
<div class="flex flex-col md:flex-row gap-4">
```

## 和 RN 的对比

```tsx
// RN：JS 判断
const { width } = useWindowDimensions()
const columns = width > 768 ? 3 : 1

// Web：CSS 自动响应（不需要 JS！）
<div className="grid grid-cols-1 md:grid-cols-3">
```

Web 方式更好——纯 CSS，不触发 JS 重渲染，也不会有布局闪烁。

## 实用模式

### 响应式容器
```html
<!-- 内容区居中，两侧留白，手机满宽 -->
<main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
```

### 响应式导航
```html
<!-- 手机显示汉堡菜单，桌面显示完整导航 -->
<button class="md:hidden">☰</button>
<nav class="hidden md:flex gap-6">
  <a href="/">首页</a>
  <a href="/blog">博客</a>
</nav>
```

## ✅ 掌握标准
- [ ] 理解 mobile-first 的含义
- [ ] 能用断点前缀做响应式网格
- [ ] 能做一个手机/桌面不同布局的页面

## 我的实践
<!-- 拖动浏览器窗口大小，观察你做的页面如何变化 -->
