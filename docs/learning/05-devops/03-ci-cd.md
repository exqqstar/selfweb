# CI/CD 自动化部署

> MVP 阶段可以手动部署，后期加自动化。这里先记概念，用到时再深入。

## 目标流程

```
git push → GitHub Actions 自动构建 → 推送到 VPS → 自动上线
```

## 手动部署（MVP 阶段用这个）

```bash
# 在 VPS 上
git pull
docker compose build
docker compose up -d
```

## GitHub Actions（后期加）

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to VPS
        # SSH 到 VPS 执行部署命令
```

## 什么时候加 CI/CD

**不急**。当你发现手动部署开始烦人的时候（大概改了 10+ 次之后），就该加了。
过早优化部署流程是浪费时间。

## ✅ 掌握标准
- [ ] 能手动完成一次完整部署
- [ ] 理解 CI/CD 的概念
- [ ] (后期) 能配置 GitHub Actions

## 我的实践
<!-- 第一次部署的完整步骤记录 -->
