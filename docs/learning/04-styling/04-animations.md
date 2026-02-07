# 动画与过渡

> Web 动画生态比 RN Animated/Reanimated 更丰富。

## 三层动画体系

```
简单过渡    →  Tailwind transition (CSS)
中等交互    →  Framer Motion (React 库)
复杂 3D     →  Three.js / WebGL (实验室用)
```

## 1. CSS Transition（最常用）

```html
<!-- hover 时颜色渐变 -->
<button class="bg-blue-500 hover:bg-blue-600 transition-colors duration-200">

<!-- hover 时放大 -->
<div class="hover:scale-105 transition-transform duration-300">

<!-- 多个属性同时过渡 -->
<div class="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
```

常用 transition 类：
- `transition-colors` — 颜色变化
- `transition-transform` — 变形（移动、缩放、旋转）
- `transition-opacity` — 透明度
- `transition-all` — 所有属性

## 2. Framer Motion（React 动画库）

类似 RN 的 Reanimated，但 API 更简洁：

```tsx
'use client'
import { motion } from 'framer-motion'

// 页面进入动画
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  内容
</motion.div>

// 列表交错动画
{items.map((item, i) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: i * 0.1 }}  // 每个延迟 0.1s
  />
))}
```

## 3. CSS Animation（循环/复杂动画）

```html
<!-- Tailwind 内置动画 -->
<div class="animate-spin">    <!-- 旋转（loading） -->
<div class="animate-pulse">   <!-- 脉冲（骨架屏） -->
<div class="animate-bounce">  <!-- 弹跳 -->
```

## 和 RN 动画的对比

| RN Animated | Web CSS | 说明 |
|-------------|---------|------|
| `Animated.Value` | CSS `transition` | 简单过渡 |
| `Reanimated worklet` | CSS `@keyframes` | 复杂动画 |
| `LayoutAnimation` | Framer Motion `layout` | 布局动画 |
| 运行在 UI 线程 | 运行在 GPU（合成层） | Web 性能也很好 |

## ✅ 掌握标准
- [ ] 能用 transition 做 hover 效果
- [ ] 理解 Framer Motion 基本用法
- [ ] 知道什么场景用哪层动画

## 我的实践
<!-- 给项目卡片加 hover 浮起效果 -->
