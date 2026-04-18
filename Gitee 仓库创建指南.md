# Gitee 仓库创建和配置指南

## ⚠️ 重要提示

您遇到的"访问受限"错误是因为 **Gitee 仓库还未创建** 或 **未正确配置**。

请按照以下步骤操作：

---

## 第一步：在 Gitee 创建仓库（必须）

### 方法 1：通过网页创建（推荐）

1. **登录 Gitee**
   - 访问：https://gitee.com
   - 使用账户登录（用户名：linksshow）
   - 如果忘记密码，请点击"忘记密码"重置

2. **创建仓库**
   - 登录后，点击右上角的 **"+"** 按钮
   - 选择 **"新建仓库"**
   - 填写以下信息：
     ```
     仓库名称：zhoushizupu
     仓库路径：zhoushizupu（自动生成）
     仓库介绍：周氏家族谱静态网站
     可见性：公开（或私有，根据您的偏好）
     ```
   - **重要**：不要勾选"使用模板初始化仓库"
   - 点击 **"创建"** 按钮

3. **验证仓库创建成功**
   - 访问：https://gitee.com/linksshow/zhoushizupu
   - 应该能看到空仓库页面

---

## 第二步：本地推送代码

### 方法 A：使用部署脚本（最简单）

双击运行项目根目录下的：
```
deploy.bat
```

### 方法 B：手动执行命令

在项目根目录依次执行：

```bash
# 1. 构建项目
npm run build

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial deployment"

# 4. 推送到 Gitee（首次需要输入账号密码）
git push -u origin master
```

**首次推送时需要输入：**
- 用户名：linksshow
- 密码：您的 Gitee 登录密码

---

## 第三步：配置 Gitee Pages

1. **进入 Pages 管理**
   - 访问：https://gitee.com/linksshow/zhoushizupu
   - 点击顶部 **"管理"** 标签
   - 左侧菜单选择 **"Pages"**

2. **配置 Pages**
   ```
   源分支：master
   源目录：/（根目录）
   ```
   
3. **启动 Pages**
   - 点击 **"启动"** 或 **"更新"** 按钮
   - 等待 1-2 分钟部署完成

4. **获取访问地址**
   - 部署成功后，会显示访问地址
   - 格式：https://linksshow.gitee.io/zhoushizupu
   - 点击地址即可访问

---

## 常见问题解决

### 问题 1：提示"仓库不存在"
**原因**：还没有在 Gitee 创建仓库
**解决**：按照第一步创建仓库

### 问题 2：推送时提示"权限不足"
**原因**：
- Gitee 账号密码错误
- 仓库属于其他用户
**解决**：
- 确认登录的是 linksshow 账号
- 重置 Gitee 密码后重试

### 问题 3：推送失败，提示"远程仓库拒绝"
**原因**：仓库是空的或者未初始化
**解决**：
```bash
# 强制推送
git push -f -u origin master
```

### 问题 4：Pages 服务无法启动
**原因**：
- dist 目录不存在
- 分支选择错误
**解决**：
1. 确保运行了 `npm run build`
2. 确保 dist 目录已推送到 master 分支
3. 重新在 Pages 设置中选择 master 分支

---

## 完整部署流程总结

```
1. 登录 Gitee → 创建 zhoushizupu 仓库
2. 本地运行 deploy.bat（或手动推送）
3. Gitee 仓库管理 → Pages → 启动服务
4. 访问生成的网址
```

---

## 访问信息

- **仓库地址**：https://gitee.com/linksshow/zhoushizupu
- **网站地址**：https://linksshow.gitee.io/zhoushizupu（部署后）
- **访问密码**：123456

---

## 后续更新

每次修改代码或数据后：

```bash
# 1. 重新构建
npm run build

# 2. 推送更新
git add .
git commit -m "Update"
git push

# 3. Gitee Pages 会自动更新（或手动点击"更新"）
```

---

**创建时间**：2026-04-18
**适用项目**：周氏家族谱
