# App Router 路由系统

> Next.js 用文件夹结构定义路由，不需要手动配置路由表。

## 核心规则

**文件夹 = URL 路径段，`page.tsx` = 该路径可访问**

```
app/
├── page.tsx            → /
├── about/
│   └── page.tsx        → /about
├── blog/
│   ├── page.tsx        → /blog
│   └── [slug]/
│       └── page.tsx    → /blog/hello-world  (动态路由)
└── lab/
    └── [slug]/
        └── page.tsx    → /lab/any-experiment
```

没有 `page.tsx` 的文件夹**不能被访问**，可以用来放组件、工具函数。

## 特殊文件

| 文件 | 作用 | RN 类比 |
|------|------|---------|
| `page.tsx` | 页面内容 | Screen 组件 |
| `layout.tsx` | 嵌套布局（切换页面不重新渲染） | Navigator 的 screenOptions |
| `loading.tsx` | 加载占位 UI | ActivityIndicator |
| `error.tsx` | 错误边界 | ErrorBoundary |
| `not-found.tsx` | 404 页面 | 无 |
| `template.tsx` | 每次导航都重新渲染的布局 | 少用 |

## 布局嵌套

```
app/
├── layout.tsx        → 全局布局（Header + Footer）
├── page.tsx          → 首页内容
└── blog/
    ├── layout.tsx    → 博客专属布局（比如侧边栏）
    └── page.tsx      → 博客列表
```

布局会**嵌套**：blog 页面 = 全局 layout 包着 blog layout 包着 blog page。
切换页面时，公共的 layout 不会重新渲染（保持导航栏状态）。

## 动态路由

```tsx
// app/blog/[slug]/page.tsx
// URL: /blog/hello-world → params.slug = "hello-world"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  return <article>{post.content}</article>
}
```

## 导航

```tsx
// 声明式（首选）
import Link from 'next/link'
<Link href="/blog">博客</Link>

// 编程式（Client Component 中）
'use client'
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/blog')
```

## ✅ 掌握标准
- [ ] 能画出文件夹结构对应的 URL
- [ ] 理解 layout 嵌套机制
- [ ] 能创建动态路由并获取参数
- [ ] 能用 Link 和 useRouter 导航

## 我的实践
<!-- 试着画出 selfweb 的路由结构 -->
