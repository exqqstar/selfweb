# selfweb 文档

## 目录

### 项目文档
- [architecture.md](./architecture.md) — 架构决策记录（ADR）

### 开发日志 — [devlog/](./devlog/)
按功能/里程碑记录，每个文件是一个完整的功能故事。
- [0001-project-init.md](./devlog/0001-project-init.md) — 项目初始化与基础搭建

### 学习笔记 — [learning/](./learning/)
分类编号排序，建议按顺序学习。
- [01-web-basics/](./learning/01-web-basics/) — HTML 语义化、CSS 布局、浏览器基础
- [02-react-web/](./learning/02-react-web/) — RN → Web 过渡（组件映射、事件、DOM）
- [03-nextjs/](./learning/03-nextjs/) — App Router、Server/Client Components、数据获取
- [04-styling/](./learning/04-styling/) — Tailwind、响应式、暗色模式、动画
- [05-devops/](./learning/05-devops/) — Docker、Caddy、CI/CD

## 使用方式

1. **开发前** → 看 architecture.md 回忆设计意图
2. **开发中** → 遇到新知识点记到 learning/ 对应文件
3. **完成一个功能后** → 更新 devlog 对应功能文件的时间线
4. **开始新功能** → 在 devlog/ 创建新的功能文件
5. **回来继续** → 看最近改动的 devlog 恢复上下文
