# HTML 语义化标签

> RN 里只有 View 和 Text，Web 有几十种标签，每种有语义含义。

## 为什么重要

搜索引擎（Google）和屏幕阅读器（无障碍）通过标签理解页面结构。
用 `<div>` 包一切能跑，但搜索引擎看不懂你的页面结构。

## 核心标签

### 页面结构
```html
<header>    <!-- 页头（导航栏） →  RN 里没有对应 -->
<nav>       <!-- 导航链接区域 -->
<main>      <!-- 页面主内容（每页只有一个） -->
<aside>     <!-- 侧边栏 -->
<footer>    <!-- 页脚 -->
<section>   <!-- 内容分区 -->
<article>   <!-- 独立内容（博客文章） -->
```

### 文本
```html
<h1> ~ <h6>  <!-- 标题层级，h1 最重要（每页通常只一个 h1） -->
<p>           <!-- 段落 →  类似 RN 的 <Text> -->
<span>        <!-- 行内文本片段 -->
<strong>      <!-- 重要文本（加粗） -->
<em>          <!-- 强调文本（斜体） -->
<a href="">   <!-- 链接 →  RN 里用 Linking 或 TouchableOpacity -->
```

### 实际应用：博客文章页

```html
<article>
  <header>
    <h1>文章标题</h1>
    <time datetime="2026-02-06">2026年2月6日</time>
  </header>
  <p>文章正文...</p>
  <footer>
    <nav>上一篇 / 下一篇</nav>
  </footer>
</article>
```

## 和 RN 的对比

| 你在 RN 里做的 | Web 正确做法 |
|---------------|-------------|
| `<View>` 包一切 | 根据语义选标签 (`header`, `main`, `section`...) |
| `<Text>` 写所有文字 | `<h1>`, `<p>`, `<span>` 按语义区分 |
| 无所谓标签 | 标签影响 SEO 和无障碍 |

## ✅ 掌握标准
- [ ] 能说出 header/nav/main/footer/article/section 的用途
- [ ] 知道 h1-h6 的层级含义
- [ ] 理解为什么不应该全用 div

## 我的实践
<!-- 写下你的理解 -->
