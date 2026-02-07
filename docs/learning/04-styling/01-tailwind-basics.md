# Tailwind 基础

> Tailwind 是 utility-first CSS 框架，直接在 class 里写样式。

## 核心思路

```tsx
// RN StyleSheet
<View style={{ padding: 16, backgroundColor: '#fff', borderRadius: 8 }}>

// Tailwind — 用 class name 表达样式
<div className="p-4 bg-white rounded-lg">
```

不写独立 CSS 文件，样式直接在组件上。

## 间距系统

`1 单位 = 4px`，记住这个换算就行。

| Tailwind | 像素 | 你在 RN 里写的 |
|----------|------|---------------|
| `p-1` | 4px | `padding: 4` |
| `p-2` | 8px | `padding: 8` |
| `p-4` | 16px | `padding: 16` |
| `p-8` | 32px | `padding: 32` |
| `p-12` | 48px | `padding: 48` |

方向前缀：
- `p-` 全部 / `px-` 水平 / `py-` 垂直
- `pt-` 上 / `pr-` 右 / `pb-` 下 / `pl-` 左
- `m-` margin 同理
- `gap-` flex/grid 子元素间距

## 尺寸

| Tailwind | 值 |
|----------|-----|
| `w-full` | width: 100% |
| `w-screen` | width: 100vw |
| `w-64` | width: 256px (64×4) |
| `h-10` | height: 40px |
| `min-h-screen` | min-height: 100vh（至少一屏高） |
| `max-w-4xl` | max-width: 896px（内容区常用） |

## 排版

```html
<h1 class="text-4xl font-bold tracking-tight">大标题</h1>
<p class="text-base text-gray-600 leading-relaxed">正文段落</p>
<span class="text-sm text-gray-400">辅助说明</span>
<a class="text-blue-500 hover:underline">链接</a>
```

## 颜色

```html
<div class="text-gray-900">        <!-- 文字色 -->
<div class="bg-blue-500">          <!-- 背景色 -->
<div class="border border-gray-200"> <!-- 边框 -->
<div class="bg-black/50">          <!-- 50% 透明度 -->
```

色阶：50(最浅) → 100 → 200 → ... → 900(最深) → 950

## 常用组合速查

```html
<!-- 居中容器 -->
<div class="mx-auto max-w-4xl px-4">

<!-- 水平居中 -->
<div class="flex items-center justify-center">

<!-- 卡片 -->
<div class="rounded-lg border bg-white p-6 shadow-sm">

<!-- 两端对齐行 -->
<div class="flex items-center justify-between">
```

## ✅ 掌握标准
- [ ] 能不查表写出常用间距、颜色、排版类
- [ ] 理解 4px 单位换算
- [ ] 能用 Tailwind 还原一个简单卡片设计

## 我的实践

### Tailwind v4 vs v3 差异 (2026-02-07)

项目实际安装了 **Tailwind v4**，和网上大多数教程（v3）有区别：

```css
/* v3（旧，大多数教程用这个） */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4（我们用的） */
@import "tailwindcss";
```

v4 的其他变化：
- 不需要 `tailwind.config.js`，配置直接写在 CSS 里用 `@theme inline`
- 用 CSS 变量定义自定义颜色/字体
- PostCSS 插件从 `tailwindcss` 改为 `@tailwindcss/postcss`

### 首页用到的 Tailwind 类解析

```tsx
<div className="flex min-h-screen flex-col items-center justify-center px-4">
```
- `flex` → display: flex
- `min-h-screen` → min-height: 100vh（至少占满一屏）
- `flex-col` → flex-direction: column
- `items-center` → align-items: center（水平居中）
- `justify-center` → justify-content: center（垂直居中）
- `px-4` → padding-left/right: 16px

```tsx
<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
```
- `text-4xl` → font-size: 2.25rem（手机）
- `sm:text-5xl` → font-size: 3rem（≥640px 屏幕变大）
- `tracking-tight` → letter-spacing: -0.025em（字间距紧凑）

```tsx
className="rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-100"
```
- `transition-colors` → color 相关属性有过渡动画
- `hover:bg-gray-100` → 鼠标悬停时背景变浅灰
