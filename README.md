# 周氏家族谱网站

一个轻量级、响应式的家族族谱管理系统，支持家族成员信息管理、树形展示、搜索查询等功能。

## 🌟 特性

- **纯静态网站** - 无需服务器，无需数据库，直接部署到 GitHub Pages 或 Gitee Pages
- **响应式设计** - 完美支持 PC 端和移动端访问
- **树形族谱展示** - 直观的家族树形结构可视化
- **搜索功能** - 支持按姓名搜索家族成员
- **后台管理** - 提供完整的家族成员增删改查功能
- **数据本地化** - 所有数据存储在本地 JSON 文件中

## 📁 项目结构

```
zhoushizipu/
├── admin.html              # 后台管理页面
├── index.html              # 入口页面
├── public/
│   ├── home.html           # 主页（族谱列表）
│   ├── detail.html         # 人物详情页
│   ├── search.html         # 搜索结果页
│   └── data/
│       └── family.json     # 家族数据文件
├── media/                  # 图片资源
├── data/                   # 数据备份目录
└── .gitignore              # Git 配置
```

## 🚀 快速开始

### 本地访问

1. 克隆项目到本地
```bash
git clone https://gitee.com/linksshow/zhoushizipu.git
```

2. 使用任意 HTTP 服务器启动项目
```bash
# 使用 Python
cd zhoushizipu
python -m http.server 8080

# 或使用 Node.js
npx http-server -p 8080
```

3. 访问网站
- 主页：http://localhost:8080/public/home.html
- 后台：http://localhost:8080/admin.html

### 部署到 Vercel

1. 访问 [Vercel](https://vercel.com/) 并登录

2. 导入 Git 仓库
   - 点击「**Add New Project**」
   - 选择「**Import Git Repository**」
   - 选择您的 Gitee 仓库 `zhoushizipu`

3. 配置项目
   - **Framework Preset**: 选择 `Other`
   - **Build Command**: 留空（纯静态项目无需构建）
   - **Output Directory**: 留空（默认为根目录）
   - 点击「**Deploy**」

4. 等待部署完成
   - Vercel 会自动构建并部署
   - 部署完成后会显示访问地址

5. 访问您的网站
```
https://zhoushizipu.vercel.app/
```

**注意**: Vercel 会自动分配一个域名，格式为 `https://[项目名].vercel.app`，也可以在 Vercel 设置中绑定自定义域名。

## 🔐 后台管理

### 登录信息
- **用户名**: admin
- **密码**: 333333

### 功能列表
- ✅ 家族成员列表管理
- ✅ 添加新成员
- ✅ 编辑成员信息
- ✅ 删除成员
- ✅ 树形视图展示
- ✅ 数据导出/导入

## 📊 数据格式

家族数据存储在 `public/data/family.json` 文件中，格式如下：

```json
{
  "id": "100000001",
  "name": "周某某",
  "gender": "male",
  "spouse": "配偶姓名",
  "generation": 1,
  "father": null,
  "mother": null,
  "biography": "人物简介...",
  "birthDate": "1900-01-01",
  "deathDate": null,
  "avatar": "media/100000001.jpg"
}
```

### 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识符 |
| name | string | 姓名 |
| gender | string | 性别（male/female） |
| spouse | string | 配偶姓名 |
| generation | number | 世代（1 为最长辈） |
| father | string/null | 父亲 ID |
| mother | string/null | 母亲 ID |
| biography | string | 人物简介 |
| birthDate | string | 出生日期 |
| deathDate | string/null | 去世日期 |
| avatar | string | 头像图片路径 |

## 🎨 页面说明

### 1. 主页 (home.html)
- 展示所有家族成员列表
- 支持分页浏览
- 提供树形视图入口
- 集成搜索功能

### 2. 详情页 (detail.html)
- 显示人物详细信息
- 展示家庭关系
- 提供编辑入口（需登录）

### 3. 搜索页 (search.html)
- 支持按姓名搜索
- 实时显示搜索结果
- 高亮显示匹配关键词

### 4. 后台管理 (admin.html)
- 完整的 CRUD 操作界面
- 数据可视化展示
- 批量操作支持

## 💡 使用技巧

### 添加新成员
1. 登录后台管理系统
2. 点击「添加成员」
3. 填写基本信息
4. 选择父母关系（建立家族关联）
5. 保存即可

### 编辑成员信息
1. 在详情页点击「编辑」按钮
2. 或从后台管理列表进入编辑
3. 修改信息后保存

### 查看家族树
1. 在主页点击「树形视图」
2. 可以展开/收起各分支
3. 点击节点跳转到详情页

## 🔧 自定义配置

### 修改网站标题
编辑 `public/home.html`，找到：
```html
<h1>周氏家族谱</h1>
```
修改为您的家族名称。

### 修改默认头像
替换 `public/media/default-avatar.png` 文件。

### 添加更多图片
将图片放入 `media/` 或 `public/media/` 目录。

## 📝 版本历史

### V1.0.2 (2026-04-19)
- 清理构建配置文件
- 移除 React 源代码
- 优化文件结构

### V1.0.1 (2026-04-19)
- 删除 MD 文档和部署脚本
- 清理多余文件

### V1.0 (2026-04-19)
- 正式发布纯静态版本
- 优化网站结构
- 删除调试代码
- 更新所有页面引用

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License

## 👨‍💻 开发者

- **linksshow** - [Gitee](https://gitee.com/linksshow)

## 🙏 致谢

感谢所有为这个项目做出贡献的人！

---

**让家族历史传承，从周氏家族谱开始** 🌳
