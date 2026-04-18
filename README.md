# 周氏家族谱 - 静态网站

一个基于 React 和 D3.js 的静态族谱网站，支持家族树可视化、密码保护、搜索等功能。

## 在线访问

- **Gitee Pages**: https://linksshow.gitee.io/zhoushizupu
- **访问密码**: 123456

## 功能特性

- ✅ 家族树可视化展示（基于 D3.js）
- ✅ 支持缩放、平移交互
- ✅ 人物详情卡片展示
- ✅ 搜索功能
- ✅ 密码保护（客户端验证）
- ✅ 响应式设计
- ✅ 支持头像显示
- ✅ 完整的人物信息展示（基本信息、成就、生平、重要事件、家族关系）

## 技术栈

- **前端框架**: React 18
- **可视化库**: D3.js 7
- **构建工具**: Vite 5
- **托管平台**: Gitee Pages

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 数据管理

### 添加新成员

编辑 `public/data/family.json` 文件，按照现有格式添加新的人物数据。

### 数据结构说明

每个人物包含以下字段：

- `id`: 唯一标识符（如 I1, I2）
- `name`: 姓名
- `gender`: 性别（M=男，F=女）
- `birthDate`: 出生日期
- `deathDate`: 逝世日期
- `birthPlace`: 出生地
- `occupation`: 职业
- `achievements`: 成就列表
- `biography`: 生平简介
- `events`: 重要事件列表
- `media.avatar`: 头像路径
- `family`: 家族关系（父母、配偶、子女）

### 头像文件

将头像图片放在 `public/media/` 目录，命名格式：`I{id}-avatar.jpg`

## 部署

### Gitee Pages 部署

1. 推送到 Gitee 仓库
2. 进入仓库设置 → Pages
3. 选择 master 分支
4. 等待部署完成

访问地址：https://linksshow.gitee.io/zhoushizupu

## 访问密码

默认访问密码：`123456`

修改密码请编辑 `src/App.jsx` 文件中的 `PASSWORD` 常量。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 项目结构

```
zhoushizupu/
├── public/
│   ├── data/
│   │   └── family.json      # 家族数据
│   └── media/               # 媒体文件（头像等）
├── src/
│   ├── components/
│   │   ├── FamilyTree.jsx   # 家族树组件
│   │   ├── PersonCard.jsx   # 人物卡片组件
│   │   ├── Navigation.jsx   # 导航组件
│   │   └── Login.jsx        # 登录组件
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 开发文档

详细开发文档请参考：

- [开发安排和步骤.md](./开发安排和步骤.md)
- [开发验收里程碑.md](./开发验收里程碑.md)
- [部署方案.md](./部署方案.md)

## 许可证

MIT License

## 联系方式

- 作者：周氏家族
- 邮箱：simon@linksshow.com

---

**最后更新**: 2026-04-18
