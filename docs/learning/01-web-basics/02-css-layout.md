# CSS 布局模型

> 这是 RN → Web 最大的认知差异，务必搞清楚。

## RN vs Web 布局默认值

```
RN  <View>:  display: flex, flexDirection: column
Web <div>:   display: block  ← 完全不同！
```

## CSS 四种布局模式

### 1. Block（默认）
```css
/* div, p, h1 等默认是 block */
/* 特点：独占一行，宽度撑满父元素 */
```
```html
<div>我独占一行</div>
<div>我也独占一行</div>
<!-- 这两个 div 会上下排列 -->
```

### 2. Inline
```css
/* span, a, strong 默认是 inline */
/* 特点：和文字一样排列，不独占一行 */
```

### 3. Flexbox（你最熟悉的）
```css
/* 需要手动开启！不像 RN 默认就是 flex */
display: flex;
```
```html
<!-- Tailwind 写法 -->
<div class="flex">           <!-- 开启 flex，默认 row（横排） -->
<div class="flex flex-col">   <!-- flex + column（竖排，RN 默认） -->
<div class="flex items-center justify-between gap-4">
```

### 4. Grid（RN 没有的，非常强大）
```html
<!-- 做卡片网格布局首选 Grid -->
<div class="grid grid-cols-3 gap-4">
  <div>卡片1</div>
  <div>卡片2</div>
  <div>卡片3</div>
  <div>卡片4</div>  <!-- 自动换行到第二排 -->
</div>
```

## 定位系统（RN 里简化过的）

| CSS | Tailwind | 说明 |
|-----|----------|------|
| `position: relative` | `relative` | 相对自身偏移 |
| `position: absolute` | `absolute` | 相对最近的 relative 父元素定位 |
| `position: fixed` | `fixed` | 固定在视口（导航栏常用！） |
| `position: sticky` | `sticky` | 滚动到顶部时固定（RN 没有！） |

```html
<!-- 固定导航栏 -->
<nav class="fixed top-0 left-0 w-full">

<!-- sticky 侧边栏 -->
<aside class="sticky top-20">
```

## ✅ 掌握标准
- [ ] 理解 block vs flex 的默认行为差异
- [ ] 能用 Flexbox 实现常见布局（居中、两端对齐、等分）
- [ ] 能用 Grid 做卡片网格
- [ ] 理解 fixed 和 sticky 的区别

## 我的实践
<!-- 自己试试做几个布局 -->
