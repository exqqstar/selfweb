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
<!-- 用 Tailwind 做一张个人名片卡片 -->
