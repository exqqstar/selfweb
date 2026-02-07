# Web 事件系统

> RN 只有 touch 事件，Web 有鼠标、键盘、表单等多种事件。

## 事件对照

| RN | Web | 说明 |
|----|-----|------|
| `onPress` | `onClick` | 最基本的点击 |
| `onLongPress` | `onContextMenu` | 右键菜单（长按的概念在 Web 不常用） |
| 无 | `onMouseEnter` / `onMouseLeave` | 鼠标悬停（Web 特有的交互方式！） |
| 无 | `onKeyDown` / `onKeyUp` | 键盘事件 |
| `onChangeText` | `onChange` | 表单输入 |
| 无 | `onSubmit` | 表单提交 |
| 无 | `onScroll` | 滚动事件（RN 有但行为不同） |

## Hover 交互（Web 最大的差异点）

RN 没有 hover（因为手机没有鼠标），Web 的 hover 是核心交互：

```tsx
// 方式一：纯 CSS/Tailwind（首选，性能好）
<button className="bg-blue-500 hover:bg-blue-600 transition-colors">

// 方式二：JS 事件（需要 JS 逻辑时）
<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
```

## 键盘事件

```tsx
// 全局快捷键
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === '/' && e.metaKey) openSearch()  // Cmd+/
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}, [])
```

## 表单处理

```tsx
// RN
<TextInput value={text} onChangeText={setText} />

// Web — 注意是 e.target.value
<input value={text} onChange={(e) => setText(e.target.value)} />

// Web 表单提交
<form onSubmit={(e) => {
  e.preventDefault()  // 阻止页面刷新！Web 表单默认会刷新页面
  handleSubmit()
}}>
```

## ✅ 掌握标准
- [ ] 能用 Tailwind hover: 做悬停效果
- [ ] 理解 onChange 和 onChangeText 的区别
- [ ] 知道 form onSubmit 要 preventDefault

## 我的实践
<!-- 做一个有 hover 效果的按钮 -->
