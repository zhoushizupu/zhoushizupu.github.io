# 周氏族谱

一个纯静态的家族族谱管理系统，支持家族成员管理、树形展示、搜索查询等功能。

## 在线访问

- **Gitee Pages**: https://linksshow.gitee.io/zhoushizipu/

## 项目演示

### 主要功能
- 📋 **家族成员列表** - 分页展示所有家族成员
- 🌳 **树形族谱** - 可视化展示家族树形结构（上三辈、下三辈）
- 🔍 **搜索功能** - 支持按姓名快速搜索
- 📱 **响应式设计** - 完美适配 PC 和移动端
- 🔐 **后台管理** - 完整的增删改查功能

## 技术栈

- **纯 HTML/CSS/JavaScript** - 无需构建工具
- **D3.js** - 家族树可视化
- **Marked.js** - Markdown 渲染（人物简介）
- **本地 JSON 存储** - 无需数据库

## 项目结构

```
zhoushizipu/
├── index.html          # 主页（成员列表 + 树形视图）
├── detail.html         # 人物详情页
├── search.html         # 搜索结果页
├── admin.html          # 后台管理页
├── data/
│   └── family.json     # 家族数据
└── media/              # 图片资源
    ├── man.png         # 默认头像
    └── [ID].jpg        # 成员照片
```

## 快速开始

### 本地运行

1. 克隆项目
```bash
git clone https://gitee.com/linksshow/zhoushizipu.git
cd zhoushizipu
```

2. 启动本地服务器
```bash
# Python
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

3. 访问网站
- 主页：http://localhost:8080/index.html
- 后台：http://localhost:8080/admin.html

### 部署

#### Gitee Pages

1. 推送代码到 Gitee
```bash
git push gitee main:master
```

2. 在 Gitee 仓库开启 Pages 服务
   - 设置 → Pages 服务
   - 选择 master 分支
   - 保存

3. 访问：`https://你的用户名.gitee.io/zhoushizipu/`

#### GitHub Pages

1. 推送代码到 GitHub
```bash
git push github main
```

2. 在 GitHub 仓库开启 Pages 服务
   - Settings → Pages
   - Source: Deploy from branch (main)
   - 保存

3. 访问：`https://你的用户名.github.io/zhoushizipu/`

## 数据格式

### 成员数据结构

```json
{
  "id": "100000001",
  "generationCode": 1001,
  "name": "姬昌",
  "title": "周文王",
  "gender": "M",
  "birthDate": "公元前 1152 年",
  "deathDate": "公元前 1056 年",
  "birthPlace": "岐山",
  "biography": "周文王姬昌，周朝奠基者...",
  "family": {
    "parents": [],
    "spouses": ["100000002"],
    "children": ["100000015", "100000016"]
  }
}
```

### 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 成员 ID（9 位数字，从 100000001 递增） |
| generationCode | number | 代际码（代际×1000+1，如第 1 代=1001） |
| name | string | 姓名 |
| title | string | 称号/头衔 |
| gender | string | 性别（M:男，F:女） |
| birthDate | string | 出生日期 |
| deathDate | string | 去世日期 |
| birthPlace | string | 出生地 |
| biography | string | 人物简介（支持 Markdown） |
| family.parents | array | 父母 ID 列表 |
| family.spouses | array | 配偶 ID 列表 |
| family.children | array | 子女 ID 列表 |

### 编码规则

**成员 ID**: 从 `100000001` 开始顺序递增
```
100000001 → 第 1 个成员
100000002 → 第 2 个成员
```

**代际码**: `代际 × 1000 + 1`
```
1001 → 第 1 代
2001 → 第 2 代
3001 → 第 3 代
```

## 后台管理

### 登录
- 用户名：`admin`
- 密码：请联系管理员

### 功能
- ✅ 成员列表管理
- ✅ 添加新成员
- ✅ 编辑成员信息
- ✅ 删除成员
- ✅ 数据导出/导入（JSON）

## 自定义配置

### 修改网站标题
编辑 `index.html` 第 6 行：
```html
<title>你的家族名称</title>
```

### 修改配色方案
编辑各 HTML 文件的 `<style>` 部分，搜索并替换：
```css
#667eea  /* 主色调 */
#764ba2  /* 渐变辅助色 */
```

### 添加成员照片
将照片放入 `media/` 目录，命名为对应的成员 ID：
```
media/100000001.jpg
media/100000002.jpg
```

## 常见问题

### Q: 如何添加新成员？
A: 登录后台管理 → 点击"添加成员" → 填写信息 → 选择父母关系 → 保存

### Q: 树形视图如何查看？
A: 在主页点击右上角的"🌳"按钮

### Q: 数据如何备份？
A: 定期备份 `data/family.json` 文件

### Q: 支持多少代成员？
A: 理论上无限制，代际码支持最多 999 代

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 更新日志

### V3.0.1 (2026-04-19)
- 移除 Vercel 相关配置
- 精简项目文件
- 更新文档说明

### V3.0.0 (2026-04-19)
- 统一品牌为"周氏族谱"
- 修复路径问题
- 清理临时文件

## 开发者

- **linksshow** - [Gitee](https://gitee.com/linksshow)

## 许可

© 2026 周氏族谱。保留所有权利。

---

**让家族历史传承，从周氏族谱开始** 🌳
