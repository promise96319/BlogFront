# 博客-客户端页面

### 运行
1. yarn
2. yarn dev

### 技术栈
 - next.js 框架（React Hooks）
 - ant design UI组件
 - marked + highlight.js 解析 markdown 文本

### 部署
  - "scripts": {
    "dev": "next",
    "start": "next start -p $PORT",
    "build": "next build && PORT=7002 npm start"
  }

  - pm2 start npm --name "my-next" -- run build

