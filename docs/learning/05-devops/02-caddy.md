# Caddy 反向代理

> Caddy 是现代 Web 服务器，最大卖点：自动 HTTPS，零配置证书。

## 为什么选 Caddy 而非 Nginx

| | Caddy | Nginx |
|--|-------|-------|
| HTTPS | 自动申请 + 续期 | 需要手动配置 certbot |
| 配置语法 | 极简 | 较复杂 |
| 性能 | 足够好 | 略好（但个人站无差异） |
| 适合 | 个人项目、小团队 | 大规模生产 |

## 基本配置

```
# Caddyfile
yourdomain.com {
    reverse_proxy localhost:3000
}
```

就这样。Caddy 会自动：
1. 向 Let's Encrypt 申请 SSL 证书
2. 配置 HTTPS
3. 将 HTTP 重定向到 HTTPS
4. 证书快过期时自动续期

## 配合 Docker Compose

```yaml
# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "3000:3000"

  caddy:
    image: caddy:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data

volumes:
  caddy_data:
```

## ✅ 掌握标准
- [ ] 能写基本的 Caddyfile
- [ ] 理解反向代理的概念（用户 → Caddy → Next.js）
- [ ] 能用 Docker Compose 同时启动 Caddy + Next.js

## 我的实践
<!-- 部署时补充实际遇到的问题 -->
