项目部署说明
项目概述
该项目为一个基于Vue.js和Node.js技术的渔业养殖服务中心，旨在为渔民提供全面的养殖技术、市场动态、政策法规等信息，并提供一个互动平台以促进养殖者之间的经验交流。项目包含公告管理、提问交流、用户管理等核心功能。

GitHub项目地址：[Fisheries-and-aquaculture-Service-Center](https://github.com/Leot-0/Fisheries-and-aquaculture-Service-Center.git)
环境要求
1. 操作系统: Windows 10
2. Node.js: v14.x 或更高
3. MySQL: v5.7 或更高
4. Git: 用于版本控制
前置准备
1. 克隆仓库
```bash
git clone https://github.com/Leot-0/Fisheries-and-aquaculture-Service-Center.git
cd Fisheries-and-aquaculture-Service-Center
```
2. 安装依赖
- 前端
```bash
cd frontend
npm install
```
- 后端
```bash
cd backend
npm install
```
3. 配置数据库
- 在MySQL中创建数据库
```sql
CREATE DATABASE fisheries_aquaculture_service_center;
```
- 编辑`backend/config/db.config.js`文件，配置数据库连接信息
```javascript
module.exports = {
  HOST: "localhost",
  USER: "your_mysql_username",
  PASSWORD: "your_mysql_password",
  DB: "fisheries_aquaculture_service_center",
  dialect: "mysql"
};
```
4. 运行数据库迁移
```bash
cd backend
npx sequelize-cli db:migrate
```
项目启动
1. 启动后端服务
```bash
cd backend
npm start
```
2. 启动前端服务
```bash
cd frontend
npm run serve
```
部署说明
1. 准备服务器
- 确保服务器上安装了Node.js、MySQL和Git。
2. 部署代码
- 克隆项目到服务器
```bash
git clone https://github.com/Leot-0/Fisheries-and-aquaculture-Service-Center.git
cd Fisheries-and-aquaculture-Service-Center
```
3. 安装依赖和构建
- 安装后端依赖并启动
```bash
cd backend
npm install
npm start
```
- 安装前端依赖并构建
```bash
cd frontend
npm install
npm run build
```
4. 配置Nginx
- 在Nginx中配置前端静态文件的托管和后端API的反向代理。编辑Nginx配置文件（例如：`/etc/nginx/sites-available/default`）：
```nginx
server {
  listen 80;
  server_name your_domain_or_IP;

  location / {
    root /path_to_your_project/frontend/dist;
    try_files $uri $uri/ /index.html;
  }

  location /api/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
5. 重启Nginx
```bash
sudo systemctl restart nginx
```
测试与维护
1. 单元测试
- 前端单元测试
```bash
cd frontend
npm run test:unit
```
- 后端单元测试
```bash
cd backend
npm run test
```
2. 集成测试与系统测试
- 编写详细的测试用例，执行集成测试和系统测试，确保系统功能正常。
注意事项
- 定期备份数据库和重要文件。
- 定期检查并更新依赖库和框架版本。
- 监控服务器性能，确保系统稳定运行。
项目文档
详见项目文档文件夹中的详细设计文档、需求分析文档和用户手册。

通过以上步骤，即可完成基于Vue.js和Node.js的渔业养殖服务中心项目的部署。
