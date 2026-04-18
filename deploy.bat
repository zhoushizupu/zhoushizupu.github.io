@echo off
chcp 65001 >nul
echo ========================================
echo   周氏家族谱 - Gitee 部署脚本
echo ========================================
echo.

cd /d "%~dp0"

echo [1/5] 检查 Git 配置...
git config user.name >nul 2>&1
if errorlevel 1 (
    echo 正在配置 Git 用户信息...
    git config --global user.name "linksshow"
    git config --global user.email "simon@linksshow.com"
)

echo [2/5] 构建项目...
call npm run build
if errorlevel 1 (
    echo 构建失败！请检查 npm 是否安装
    pause
    exit /b 1
)

echo [3/5] 添加构建文件到 Git...
git add -f dist
git add .

echo [4/5] 提交更改...
git commit -m "Auto-deploy: Build and update"

echo [5/5] 推送到 Gitee...
git push -u origin master

echo.
echo ========================================
echo   部署完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 访问 https://gitee.com/linksshow/zhoushizupu
echo 2. 进入"管理" -> "Pages"
echo 3. 选择 master 分支，点击"启动"
echo 4. 等待部署完成后访问您的网站
echo.
echo 访问密码：123456
echo.
pause
