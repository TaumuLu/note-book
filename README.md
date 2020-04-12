# Note book
Learning project: react+nestjs+typescript  
网页端展示的记账本应用程序  
nestjs练手项目，包含docker的运用

## 需求

- 加载提供的 csv 数据
- 展示数据
- 支持添加账单
- 按月份筛选
- 按分类筛选
- 金额统计
- 排序

### 思路

需要编写前后端程序，前端只做简单的展示，后端完成 crud 相关逻辑  
只有增加和筛选逻辑，默认一开始展示未做筛选的数据，日期筛选操作后页脚展示所选日期里收支金额的统计  
默认按时间排序，可以点击表头排序按钮进行排序  
选择账单分类后，账单类型应该自动带出来，这里账单的类型和账单分类的类型是相对应的，不应该给用户填写

### 技术栈

前后端分类，技术选型，前端选择 react 技术栈，未引入状态管理，页面 ui 简单，组件数量也不多，没必要复杂化  
后端选择使用 nestjs，配合 crud 包基本不用写什么逻辑了，nestjs 框架成熟，生态丰富，代码组织的很好，模块分明，如果有后续开发维护也方便  
使用 ts 作为开发语言，加上 eslint 检查，犯错少写起来很规范，类型明确，引入包时也方便查看 api

#### 前端

react+antd+typescript

#### 后端

nestjs+@nestjsx/crud+typeorm+typescript

## 使用

考虑到使用时环境不一致问题，使用 docker 运行

- 安装依赖
  - npm install
- 打包
  - npm run build
- 运行
  - docker-compose up
- 打开浏览器访问
  - http://127.0.0.1/
  - http://www.notebook.com/
    - 需要绑定 host
    - 127.0.0.1 www.notebook.com
    - nginx 配置路径 /compose/nginx/nginx.conf

### 运行环境

node >= 10  
npm >= 6  
docker >= 18

## 遇到的问题

#### docker mysql 镜像中文乱码

修改 mysql 配置，通过 volumes 挂载替换配置

#### docker 保证服务启动顺序

使用官方推荐的 wait-for-it.sh 脚本

#### Error starting userland proxy: Bind for 0.0.0.0:80: unexpected error
docker镜像中的nginx需要映射到主机的80端口，被占用时会报此错  
`lsof -i:80`查看端口被谁占用  
一般是nginx程序会占用80端口，nginx -s stop关闭即可  
