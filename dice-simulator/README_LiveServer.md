# Live Server 插件安装指南

## 为什么需要 Live Server？

Live Server 是一个 VS Code/Trae 插件，可以：
- 🚀 自动启动本地开发服务器
- 🔄 文件保存后自动刷新浏览器
- 📱 支持移动端调试
- 🔧 无需配置，一键启动

## 安装方法

### 方法一：通过 Trae 插件市场安装（推荐）

1. 打开 Trae IDE
2. 点击左侧活动栏的 **插件图标**（四个方块组成的图标）
3. 在搜索框输入：`Live Server`
4. 找到 **Live Server**（作者：Ritwick Dey）
5. 点击 **安装**

### 方法二：通过命令行安装

在终端运行：
```bash
code --install-extension ritwickdey.LiveServer
```

## 使用方法

安装完成后，有两种方式启动 Live Server：

### 方式一：右键菜单
1. 在 `index.html` 文件上右键
2. 选择 **"Open with Live Server"**

### 方式二：快捷键
1. 打开 `index.html` 文件
2. 按 **`Ctrl+Shift+P`** 打开命令面板
3. 输入：`Live Server: Open with Live Server`
4. 按回车

### 方式三：状态栏按钮
1. 打开 HTML 文件
2. 点击右下角状态栏的 **"Go Live"** 按钮

## 使用技巧

- 服务器默认在 **5500** 端口启动
- 浏览器会自动打开 `http://127.0.0.1:5500/`
- 修改代码并保存后，浏览器会自动刷新
- 按 **`Ctrl+C`** 或在状态栏点击 **"Port: 5500"** 可以停止服务器

## 替代方案

如果不想安装插件，也可以：

1. **直接打开文件**：双击 `index.html` 用浏览器打开
2. **使用 Python**（如果权限允许）：
   ```bash
   python -m http.server 8080
   ```
3. **使用 Node.js**（如果已安装）：
   ```bash
   npx serve
   ```

---

安装完成后，你的前端开发体验会大幅提升！
