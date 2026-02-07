# 0001 - 项目初始化与基础搭建

## 目标
从零搭建个人网站项目，确定技术方案，跑通开发环境。

## 时间线

### 2026-02-06 | 规划阶段
- 确定项目目标：综合型个人网站（作品集 + 博客 + 实验室）
- 技术栈选型：Next.js + TypeScript + Tailwind CSS + MDX
- 部署方案：Docker + Caddy on VPS
- 建立文档体系（CLAUDE.md、architecture.md、devlog、learning）
- 文档结构从扁平改为分类：devlog 按功能、learning 按主题分文件夹

### 2026-02-07 | 项目初始化
- 用 `create-next-app` 初始化项目
  - 实际版本：Next.js 16.1.6 + React 19.2.3 + Tailwind v4
  - 选项：TypeScript、Tailwind、ESLint、App Router、src 目录、`@/*` 别名
- 清理默认模板，替换为简洁首页（导航到 About/Blog/Projects）
- 配置 metadata（title template + description）
- `npm run build` 和 `npm run dev` 验证通过
- Git 初始化 + 首次提交
- 创建 GitHub 仓库（public）并推送：https://github.com/exqqstar/selfweb

### 2026-02-?? | 基础布局
<!-- 完成 Header/Footer/Layout 时填写 -->

## 决策
- 框架选 Next.js 而非 Astro → 交互需求重（详见 architecture.md ADR-001）
- 样式选 Tailwind → 对 RN 开发者过渡友好（ADR-002）
- 博客用 MDX 本地文件 → 零成本 + 可嵌入组件（ADR-003）
- 技术栈最终版本比预期更新：Next.js 16（非 15）、Tailwind v4（非 v3），网上教程注意版本

## 踩坑
- `create-next-app` 不允许在非空目录运行（连 `.claude/` 隐藏目录也不行）
  - 解决：在临时目录初始化，再把文件移回来
- `.claude/` 目录是 Claude Code 运行时自动重建的，需要加入 `.gitignore`
- Tailwind v4 语法和 v3 不同：`@import "tailwindcss"` 替代了 `@tailwind base/components/utilities`

## 成果
- [x] Next.js 项目可运行（build + dev 均通过）
- [x] 首页有内容（名字 + 简介 + 导航按钮）
- [x] 可以本地预览（localhost:3000）
- [x] 代码已上传 GitHub
- [ ] 基础布局完成（Header + Footer + 响应式）
