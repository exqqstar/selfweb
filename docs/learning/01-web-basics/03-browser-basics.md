# 浏览器基础

> RN 运行在原生容器里，Web 运行在浏览器里。理解浏览器帮你调试。

## 浏览器渲染流程

```
HTML → DOM 树
               ↘
                 → Render Tree → Layout → Paint → 屏幕
               ↗
CSS  → CSSOM
```

和 RN 的区别：RN 通过 Bridge/JSI 调用原生组件渲染，Web 则是浏览器自己渲染 HTML/CSS。

## DevTools（你最重要的调试工具）

Chrome DevTools 相当于 RN 的 Flipper/React DevTools，但更强大。

**打开方式**: `Cmd + Option + I` (Mac)

### 最常用的面板

| 面板 | 用途 | RN 等价 |
|------|------|---------|
| Elements | 查看/修改 DOM 和 CSS | React DevTools 组件树 |
| Console | JS 控制台 | Metro console.log |
| Network | 请求监控 | Flipper Network |
| Application | 本地存储、Cookie | AsyncStorage 查看 |

### Elements 面板技巧
- 直接点击页面元素 → 跳到对应 HTML
- 右侧 Styles 面板可以**实时修改 CSS**试效果
- 这是学 CSS 最好的方式：直接改，看变化

## URL 和路由

```
https://example.com/blog/hello-world?tag=react#section2
  |         |          |              |          |
协议      域名        路径           查询参数    锚点(hash)
```

RN 里导航是 `navigation.navigate('Screen', params)`
Web 里导航就是**改变 URL**，浏览器根据 URL 决定显示什么。

## ✅ 掌握标准
- [ ] 能打开 DevTools 查看元素样式
- [ ] 能在 Elements 面板实时修改 CSS
- [ ] 能用 Network 面板查看请求
- [ ] 理解 URL 各部分的含义

## 我的实践
<!-- 打开任意网站，用 DevTools 修改它的样式试试 -->
