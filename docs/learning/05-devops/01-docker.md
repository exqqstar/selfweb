# Docker 基础

> 把你的 Next.js 项目打包成一个"箱子"，在任何地方都能运行。

## 为什么用 Docker

- **一致性**：本地能跑 = 服务器能跑，不会出现"我电脑上没问题"
- **隔离**：不污染服务器环境
- **可复现**：Dockerfile 就是部署文档

## 核心概念

| 概念 | 类比 | 说明 |
|------|------|------|
| Image (镜像) | App 安装包 | 项目的只读快照 |
| Container (容器) | 运行中的 App | 镜像的运行实例 |
| Dockerfile | 打包脚本 | 描述如何构建镜像 |
| docker-compose | 批量启动 | 同时管理多个容器 |

## Next.js Dockerfile（后面实际搭建时会创建）

```dockerfile
# 阶段 1: 安装依赖
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 阶段 2: 构建
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 阶段 3: 运行（最小镜像）
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

多阶段构建：最终镜像只包含运行需要的文件，不包含开发依赖。

## 常用命令

```bash
docker build -t selfweb .           # 构建镜像
docker run -p 3000:3000 selfweb     # 运行容器
docker compose up -d                 # 后台启动（用 compose）
docker compose down                  # 停止
docker logs selfweb                  # 查看日志
```

## ✅ 掌握标准
- [ ] 理解 Image / Container / Dockerfile 的关系
- [ ] 能读懂多阶段构建的 Dockerfile
- [ ] 能用 docker compose 启动和停止服务

## 我的实践
<!-- 本地试试 docker build 和 run -->
