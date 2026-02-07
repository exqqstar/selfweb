# Metadata 与 SEO

> RN App 不需要 SEO，Web 网站需要。这是让搜索引擎找到你的方式。

## 什么是 SEO

Search Engine Optimization — 让 Google 能找到并正确展示你的网站。
包括：页面标题、描述、URL 结构、语义化 HTML 等。

## Next.js Metadata API

### 静态 metadata
```tsx
// app/page.tsx
export const metadata = {
  title: '首页 | My Site',
  description: '我的个人网站',
}
```

### 动态 metadata（博客文章）
```tsx
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: `${post.title} | My Site`,
    description: post.excerpt,
  }
}
```

### 全局默认（layout.tsx）
```tsx
// app/layout.tsx
export const metadata = {
  title: {
    template: '%s | My Site',  // 子页面标题会替换 %s
    default: 'My Site',
  },
  description: '个人网站描述',
}
```

## Open Graph（社交媒体分享）

分享链接到微信/Twitter 时显示的预览卡片：

```tsx
export const metadata = {
  openGraph: {
    title: '文章标题',
    description: '文章摘要',
    images: ['/og-image.png'],  // 预览图
  },
}
```

## 其他 SEO 要素

- **语义化 HTML**：用 h1-h6, article, nav 等（详见 01-web-basics）
- **URL 友好**：`/blog/my-first-post` 比 `/blog?id=123` 好
- **sitemap.xml**：告诉搜索引擎你有哪些页面（Next.js 可自动生成）
- **robots.txt**：告诉搜索引擎哪些页面可以索引

## ✅ 掌握标准
- [ ] 能为页面添加静态 metadata
- [ ] 能为动态路由生成 metadata
- [ ] 理解 Open Graph 的作用

## 我的实践
<!-- 在浏览器里查看任意网站的 meta 标签：右键 → 查看源代码 → 搜索 <meta -->
