# RN 组件 → Web 标签对照

> 你最需要的速查表。写代码时随时翻。

## 组件映射

| React Native | Web (HTML/JSX) | 备注 |
|--------------|----------------|------|
| `<View>` | `<div>` | div 默认 block 不是 flex！ |
| `<View>` (语义) | `<header>` `<main>` `<section>` `<nav>` | Web 优先选语义标签 |
| `<Text>` | `<p>` `<h1>`~`<h6>` `<span>` | 按语义选 |
| `<Image source={require()}>` | `<Image src="" alt="">` (Next.js) | Next.js Image 自动优化 |
| `<ScrollView>` | 不需要 | body 天然可滚动 |
| `<FlatList>` | `{items.map(i => ...)}` | 不需要虚拟列表 |
| `<TouchableOpacity>` | `<button>` | 原生按钮有无障碍支持 |
| `<Pressable>` | `<button>` 或 CSS hover | Web 有 :hover 伪类 |
| `<TextInput>` | `<input>` `<textarea>` | |
| `<Switch>` | `<input type="checkbox">` | 可用 Tailwind 美化 |
| `<ActivityIndicator>` | CSS animation 或组件库 | |
| `<Modal>` | `<dialog>` 或自建 | HTML5 dialog 支持不错 |
| `<SafeAreaView>` | 不需要 | Web 没有刘海屏 |

## 关键行为差异

### 文本不需要包 Text
```tsx
// RN: 文字必须在 <Text> 里
<View><Text>hello</Text></View>

// Web: 文字可以直接写（但推荐用语义标签）
<div>hello</div>
<p>hello</p>
```

### 链接导航
```tsx
// RN
<TouchableOpacity onPress={() => navigation.navigate('Blog')}>

// Web (Next.js)
import Link from 'next/link'
<Link href="/blog">博客</Link>  // 就是一个 <a> 标签
```

### 图片
```tsx
// RN
<Image source={require('../assets/photo.png')} style={{width: 100, height: 100}} />

// Web (Next.js) — width/height 必须指定或用 fill
import Image from 'next/image'
<Image src="/photo.png" width={100} height={100} alt="描述文字" />
```

## ✅ 掌握标准
- [ ] 能不看表直接写出常用标签
- [ ] 知道什么时候用 div 什么时候用语义标签
- [ ] 能用 Next.js 的 Link 和 Image

## 我的实践
<!-- 试着把一个 RN 组件「翻译」成 Web 版本 -->
