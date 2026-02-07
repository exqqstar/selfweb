# 架构决策记录

## ADR-001: 选择 Next.js 而非 Astro

**日期**: 2026-02-06
**状态**: 已决定

**背景**:
需要一个支持博客（SSG）和交互实验（CSR）的混合框架。候选方案：Next.js、Astro、Remix。

**决策**: Next.js 15 (App Router)

**理由**:
- 项目有大量交互实验需求，Next.js 对 React 客户端组件的支持比 Astro 更自然
- 开发者有 React Native 背景，React 生态迁移成本低
- App Router 的 Server Components 兼顾了博客内容的 SEO 需求
- 社区和生态最成熟，学习资源最丰富

**权衡**:
- Astro 对纯内容页面的 JS bundle 更小，但对 React 重交互页面需要额外配置
- Remix 的数据加载模型更优雅，但社区规模和内容站生态不如 Next.js

---

## ADR-002: 选择 Tailwind CSS

**日期**: 2026-02-06
**状态**: 已决定

**背景**:
需要选择 CSS 方案。候选：Tailwind、CSS Modules、styled-components、vanilla CSS。

**决策**: Tailwind CSS

**理由**:
- 对 React Native 开发者来说，Tailwind 的 utility-first 模式比手写 CSS 更直觉
- 不需要在文件间切换（样式写在组件里）
- 响应式设计通过 `md:` `lg:` 前缀很直观
- 和 Next.js 的集成是官方推荐的

**权衡**:
- HTML 会比较长（class 很多），但可以通过抽取组件解决
- 复杂动画可能需要配合 CSS Modules 或 Framer Motion

---

## ADR-003: MDX 本地文件而非 Headless CMS

**日期**: 2026-02-06
**状态**: 已决定

**背景**:
博客内容管理方案选择。候选：MDX 本地文件、Contentlayer、Sanity、Notion API。

**决策**: MDX 本地文件 + 自定义解析

**理由**:
- 零成本，无外部依赖
- Git 版本控制天然支持
- MDX 允许在文章中嵌入 React 组件（展示交互 demo）
- 对开发者来说，在编辑器里写 Markdown 比任何 CMS 都快

**权衡**:
- 没有可视化编辑界面（但作为开发者，Markdown 更高效）
- 将来如果需要 CMS，可以迁移到 Contentlayer 或 Sanity，MDX 内容基本可复用

---

## ADR-004: Docker + VPS 自部署

**日期**: 2026-02-06
**状态**: 已决定

**背景**:
已有 VPS，考虑部署方案。

**决策**: Docker 容器化部署

**理由**:
- 已有服务器资源，不增加成本
- Docker 保证开发/生产环境一致
- 完全掌控，不受平台限制
- 可以顺便学习 DevOps 基础

**权衡**:
- 需要自己维护服务器安全、SSL 证书等
- Vercel 的零配置部署体验更好，但受限于平台规则
