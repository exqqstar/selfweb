# 0001 - 项目初始化与基础搭建

## 目标
从零搭建个人网站项目，确定技术方案，跑通开发环境。

## 时间线

### 2026-02-06 | 规划阶段
- 确定项目目标：综合型个人网站（作品集 + 博客 + 实验室）
- 技术栈选型：Next.js 15 + TypeScript + Tailwind CSS + MDX
- 部署方案：Docker + Caddy on VPS
- 建立文档体系（CLAUDE.md、architecture.md、devlog、learning）

### 2026-02-?? | 项目初始化
<!-- 初始化 Next.js 项目时填写 -->

### 2026-02-?? | 基础布局
<!-- 完成 Header/Footer/Layout 时填写 -->

## 决策
- 框架选 Next.js 而非 Astro → 交互需求重（详见 architecture.md ADR-001）
- 样式选 Tailwind → 对 RN 开发者过渡友好（ADR-002）
- 博客用 MDX 本地文件 → 零成本 + 可嵌入组件（ADR-003）

## 踩坑
<!-- 开发过程中遇到的问题 -->

## 成果
- [ ] Next.js 项目可运行
- [ ] 基础布局完成（Header + Footer + 响应式）
- [ ] 首页有内容
- [ ] 可以本地预览
