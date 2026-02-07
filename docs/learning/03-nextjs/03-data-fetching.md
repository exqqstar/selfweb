# 数据获取

> Next.js App Router 里获取数据比 RN 简单得多——直接 async/await。

## 和 RN 的对比

```tsx
// RN 里获取数据：useEffect + useState
function PostList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/api/posts').then(r => r.json()).then(setPosts).finally(() => setLoading(false))
  }, [])
  if (loading) return <ActivityIndicator />
  return posts.map(...)
}

// Next.js Server Component：直接 await，没有 loading 状态管理
async function PostList() {
  const posts = await getPosts()  // 直接 await！
  return posts.map(...)
}
```

## 三种数据来源

### 1. 本地文件（博客用这个）
```tsx
import fs from 'fs'
import path from 'path'

async function getPosts() {
  const dir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(dir)
  // 读取 MDX 文件...
}
```

### 2. 外部 API
```tsx
async function getGithubRepos() {
  const res = await fetch('https://api.github.com/users/you/repos')
  return res.json()
}
```

### 3. 数据库（未来可能用到）
```tsx
// 如果接了 Supabase 之类的
const posts = await supabase.from('posts').select('*')
```

## 静态生成 vs 动态渲染

```tsx
// 静态生成（构建时生成 HTML，博客文章用这个）
// Next.js 默认就是静态的，不用额外配置

// 如果需要动态（每次请求都重新获取），用：
export const dynamic = 'force-dynamic'
// 或在 fetch 里设置：
fetch(url, { cache: 'no-store' })
```

博客文章适合静态生成——内容不会频繁变化，构建时生成 HTML 性能最好。

## generateStaticParams（动态路由的静态生成）

```tsx
// app/blog/[slug]/page.tsx
// 告诉 Next.js 有哪些路径需要预生成
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}
```

## ✅ 掌握标准
- [ ] 能在 Server Component 里直接 await 获取数据
- [ ] 理解静态生成和动态渲染的区别
- [ ] 能用 generateStaticParams 预生成博客页面

## 我的实践
<!-- 试试读取一个本地 JSON 文件并渲染 -->
