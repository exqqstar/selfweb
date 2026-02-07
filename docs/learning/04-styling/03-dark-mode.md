# 暗色模式

> Web 暗色模式比 RN 简单得多，Tailwind 原生支持。

## Tailwind dark: 前缀

```html
<div class="bg-white dark:bg-gray-900">
<p class="text-gray-900 dark:text-gray-100">
<div class="border-gray-200 dark:border-gray-700">
```

## 实现方式

### 方式一：跟随系统（最简单）
```js
// tailwind.config.ts
export default {
  darkMode: 'media',  // 跟随操作系统设置
}
```

### 方式二：手动切换（推荐，用户可控）
```js
// tailwind.config.ts
export default {
  darkMode: 'class',  // 通过 <html class="dark"> 切换
}
```

```tsx
// 切换按钮组件 (Client Component)
'use client'
function ThemeToggle() {
  const [dark, setDark] = useState(false)

  function toggle() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return <button onClick={toggle}>{dark ? '☀️' : '🌙'}</button>
}
```

### 避免闪烁
页面加载时会先显示亮色再跳暗色（flash of unstyled content）。
解决方案：在 `<head>` 里加一段 script 提前设置 class。这个实现时再细说。

## 设计暗色模式的技巧

- 不是简单地黑白反转，暗色背景用深灰（`gray-900`）而非纯黑
- 文字用浅灰（`gray-100`）而非纯白，减少对比刺眼
- 彩色元素（按钮、链接）在暗色模式下可能需要调亮

## ✅ 掌握标准
- [ ] 能用 dark: 前缀写双主题样式
- [ ] 理解 media 和 class 两种模式的区别
- [ ] 能做一个主题切换按钮

## 我的实践
<!-- 给你的卡片组件加上暗色模式支持 -->
