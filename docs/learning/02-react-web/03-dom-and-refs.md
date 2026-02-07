# DOM 操作和 Ref

> RN 里 ref 用得不多，Web 里一些交互场景必须用。

## 什么时候需要 Ref

- 控制焦点（focus input）
- 测量元素尺寸
- 集成非 React 库（如 Three.js canvas）
- 滚动到指定位置

## 常见用法

### 聚焦输入框
```tsx
'use client'
import { useRef } from 'react'

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        搜索
      </button>
    </>
  )
}
```

### 滚动到元素
```tsx
const sectionRef = useRef<HTMLDivElement>(null)

// 点击后滚动到对应区域
<button onClick={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>
  跳转到项目区
</button>

<div ref={sectionRef}>项目展示区域</div>
```

### 测量尺寸（类似 RN 的 onLayout）
```tsx
const boxRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if (boxRef.current) {
    const { width, height } = boxRef.current.getBoundingClientRect()
    // RN 里用 onLayout，Web 里用 getBoundingClientRect
  }
}, [])
```

## ✅ 掌握标准
- [ ] 能用 ref 控制 input 焦点
- [ ] 知道 scrollIntoView 的用法
- [ ] 理解 getBoundingClientRect（RN 的 onLayout 等价物）

## 我的实践
<!-- 试试用 ref 做一个点击跳转到页面某个区域的功能 -->
