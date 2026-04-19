# 周氏族谱

一个现代化的家族族谱管理系统，支持族谱展示、人物详情查看、搜索查询和后台管理功能。

## 📁 项目结构

```
zhoushizupu/
├── index.html          # 首页 - 族谱列表展示和树形视图
├── detail.html         # 人物详情页
├── search.html         # 搜索结果页
├── admin.html          # 管理后台（含登录）
├── data/
│   └── family.json     # 家族数据文件
├── media/
│   ├── man.png         # 默认头像
│   └── *.jpg           # 人物头像图片（以 ID 命名）
└── README.md           # 项目说明文档
```

## 🌟 功能特性

### 1. 首页展示 (`index.html`)
- **列表视图**：以卡片形式展示家族成员，支持分页浏览
- **树形视图**：可视化树形结构展示家族关系
- **搜索功能**：快速搜索家族成员
- **响应式设计**：完美适配 PC、平板和移动端
- **人物卡片**：显示姓名、性别、出生地、代数等信息
- **详情弹窗**：点击查看人物详细信息

### 2. 人物详情 (`detail.html`)
- **大头像展示**：350x467px 高清头像
- **基本信息**：出生/逝世日期、籍贯、职业等
- **家族关系**：父母、配偶、子女关系展示
- **Markdown 简介**：支持 Markdown 格式的人物生平介绍
- **家族成员网格**：6 列响应式布局展示相关家族成员
- **移动端适配**：自动调整为 2 列布局

### 3. 搜索功能 (`search.html`)
- **全局搜索**：在所有页面均可使用顶部搜索框
- **结果展示**：以卡片形式展示搜索结果
- **高亮显示**：突出显示匹配的人物信息
- **快速跳转**：点击结果直接跳转到详情页

### 4. 管理后台 (`admin.html`)
- **登录验证**：安全的登录界面
- **成员管理**：添加、编辑、删除家族成员
- **数据统计**：实时显示总成员数、男女成员统计
- **关系维护**：自动建立父子、夫妻关系
- **JSON 导出**：一键导出/复制家族数据
- **表单验证**：完善的表单验证和提示

## 🛠️ 技术栈

- **前端框架**：纯 HTML5 + CSS3 + JavaScript
- **可视化库**：D3.js v7 (树形视图)
- **Markdown 解析**：marked.js
- **数据存储**：JSON 文件格式
- **响应式设计**：CSS Grid + Flexbox + Media Queries
- **无后端依赖**：纯静态网站，可直接部署

## 📱 响应式断点

- **桌面端**：> 768px - 3 列布局
- **平板端**：≤ 768px - 2 列布局
- **手机端**：≤ 480px - 1 列布局

## 🚀 部署方式

### 方式一：GitHub Pages
1. 将项目推送到 GitHub 仓库
2. 在 Settings > Pages 中启用 GitHub Pages
3. 选择 main 分支作为源
4. 访问 `https://yourusername.github.io/repo-name`

### 方式二：Gitee Pages
1. 将项目推送到 Gitee 仓库
2. 进入仓库管理 > 服务 > Gitee Pages
3. 选择 main 分支并启动
4. 访问 `https://yourname.gitee.io/repo-name`

### 方式三：本地运行
直接双击打开 `index.html` 即可在浏览器中预览

## 📝 数据格式

家族数据存储在 `data/family.json` 中，格式如下：

```json
{
  "family": {
    "name": "周氏族谱",
    "description": "周氏族谱系",
    "rootId": "100000001",
    "persons": {
      "100000001": {
        "id": "100000001",
        "name": "姓名",
        "gender": "M",
        "birthDate": "农历出生日期",
        "deathDate": "逝世日期（可选）",
        "birthPlace": "出生地",
        "residence": "现居地",
        "generation": 1,
        "generationWord": "字辈",
        "generationCode": 1001,
        "biography": "Markdown 格式简介",
        "achievements": ["成就列表"],
        "family": {
          "parents": ["父亲 ID"],
          "spouses": ["配偶 ID"],
          "children": ["子女 ID"]
        },
        "cemetery": {
          "location": "墓地地址",
          "latitude": 34.408,
          "longitude": 108.726
        }
      }
    }
  }
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| id | String | 是 | 唯一标识，格式：100000001 开始 |
| name | String | 是 | 姓名 |
| gender | String | 是 | M=男，F=女 |
| birthDate | String | 是 | 农历出生日期 |
| deathDate | String | 否 | 逝世日期，留空表示在世 |
| birthPlace | String | 否 | 出生地 |
| residence | String | 否 | 现居地 |
| generation | Number | 是 | 第几代（阿拉伯数字） |
| generationWord | String | 否 | 字辈，如"文字辈" |
| generationCode | Number | 是 | 代际码（generation*1000+1） |
| biography | String | 否 | Markdown 格式生平简介 |
| achievements | Array | 否 | 成就与荣誉列表 |
| family.parents | Array | 否 | 父母 ID 列表 |
| family.spouses | Array | 否 | 配偶 ID 列表 |
| family.children | Array | 否 | 子女 ID 列表 |
| cemetery | Object | 否 | 墓地信息 |

## 💻 管理后台使用说明

### 登录
- 打开 `admin.html`
- 输入账户和密码
- 点击登录进入管理界面

### 添加成员
1. 填写基本信息（姓名、性别、出生日期必填）
2. 选择父亲、母亲、配偶（可选）
3. 填写墓地信息（可选）
4. 点击"保存成员"
5. 复制生成的 JSON 数据
6. 粘贴到 `data/family.json` 并保存

### 编辑成员
1. 在成员列表中找到要编辑的成员
2. 点击"编辑"按钮
3. 修改信息后保存
4. 更新 JSON 文件

### 删除成员
1. 在成员列表中点击"删除"按钮
2. 确认删除操作
3. 更新 JSON 文件

## 🎨 自定义配置

### 修改主题色
在 HTML 文件的 `<style>` 部分修改以下颜色变量：
- `#667eea` - 主色调
- `#764ba2` - 辅助色
- `#FF69B4` - 女性主题色

### 修改默认头像
替换 `media/man.png` 文件

### 修改页脚信息
编辑 HTML 文件底部的 `.footer` 部分

## 📊 性能优化

- 使用 CDN 加载第三方库（D3.js、marked.js）
- 图片按需加载，使用 WebP 格式更佳
- CSS 内联，减少 HTTP 请求
- 数据分页加载，避免一次性加载大量数据

## 🔧 开发建议

### 添加新功能
1. 保持代码风格一致
2. 遵循现有命名规范
3. 确保移动端兼容性
4. 测试所有浏览器

### 数据备份
定期备份 `data/family.json` 文件，避免数据丢失

### 图片命名
人物头像图片使用人物 ID 命名，如：`100000001.jpg`

## 📄 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 移动端浏览器（iOS Safari、Chrome Mobile）

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📞 技术支持

如有问题或建议，请通过以下方式联系：
- 提交 Issue
- 邮件联系

## 📜 许可证

**保留所有权利 (All Rights Reserved)**

- ✅ 允许访问和查看
- ❌ 不允许修改源代码
- ❌ 不允许用于商业用途
- ❌ 不允许分发和再发布

本项目仅供家族内部使用，未经作者书面许可，任何单位或个人不得以任何形式复制、修改、传播或用于商业目的。

---

**周氏族谱** - 家族传承，源远流长
