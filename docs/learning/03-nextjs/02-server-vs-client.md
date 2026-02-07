# Server Components vs Client Components

> Next.js App Router 最核心的概念。搞懂这个，其他都好理解。

## 一句话区分

- **Server Component**：在服务器上运行，输出 HTML，不带 JS 到浏览器
- **Client Component**：在浏览器运行，可以交互（useState、onClick）

## 默认行为

```tsx
// app/page.tsx — 默认就是 Server Component，不用声明
export default function Home() {
  return <h1>Hello</h1>  // 服务器渲染成 HTML 直接发给浏览器
}
```

```tsx
// components/counter.tsx — 需要交互，必须声明 'use client'
'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

## 什么时候用哪个？

| 需求 | 用 Server | 用 Client |
|------|-----------|-----------|
| 显示静态内容 | ✅ | |
| 读文件/数据库 | ✅ | |
| SEO 重要的内容 | ✅ | |
| useState / useEffect | | ✅ |
| onClick / onChange | | ✅ |
| 浏览器 API (window, localStorage) | | ✅ |
| 动画/交互效果 | | ✅ |

## 组合模式（关键！）

Server Component **可以包含** Client Component，反过来不行：

```tsx
// app/blog/[slug]/page.tsx (Server)
import LikeButton from '@/components/like-button'  // Client

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)  // 服务端读文件

  return (
    <article>
      <h1>{post.title}</h1>       {/* 服务端渲染，SEO 友好 */}
      <div>{post.content}</div>
      <LikeButton />               {/* 客户端交互组件 */}
    </article>
  )
}
```

**经验法则**：页面框架用 Server Component，交互小部件用 Client Component。
把 `'use client'` 的边界推到尽可能小的组件上。

## 常见错误

```tsx
// ❌ 在 Server Component 里用 useState
export default function Page() {
  const [x, setX] = useState(0)  // 报错！
}

// ❌ 在 Client Component 里直接 await
'use client'
export default async function Page() {
  const data = await fetch(...)  // 报错！
}

// ✅ 正确做法：Server 获取数据，传给 Client 展示交互
// Server
const data = await getData()
<ClientComponent data={data} />
```

## 和 RN 的对比

RN 里所有组件都在客户端运行。Server Component 是 Web 独有的概念——
它解决的问题是：**用户不需要下载用不到的 JS 代码**。

你的博客文章内容不需要 JS 交互，所以用 Server Component 渲染，
浏览器收到的是纯 HTML，加载更快、SEO 更好。

## ✅ 掌握标准
- [ ] 能判断一个组件该用 Server 还是 Client
- [ ] 理解 'use client' 声明的含义
- [ ] 能把页面拆分成 Server 框架 + Client 交互部件
- [ ] 知道 Server Component 不能用 hooks

## 我的实践
<!-- 列出 selfweb 的页面，标注哪些部分是 Server 哪些是 Client -->
