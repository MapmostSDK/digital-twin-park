# 简介

本项目是基于 [Mapmost SDK for WebGL](https://www.mapmost.com/#/layout/webgl/home/) 实现的一个数字孪生智慧园区案例，旨在助力园区智能监控与安全管理。

![Static Badge](https://img.shields.io/badge/Author-Mapmost-blue)
![Static Badge](https://img.shields.io/badge/%40mapmost%2Fmapmost--webgl-9.2.0-green)
![Static Badge](https://img.shields.io/badge/Language-vue/javascript-green)
![Static Badge](<https://img.shields.io/badge/License-MIT-rgb(245%2C%20128%2C%2066)>)

### 案例效果

[☞ 在线预览](https://www.bilibili.com/video/BV1d3q1YXEYu/)

[☞ 在线体验](https://delivery.mapmost.com/cdn/park/dist/index.html)

<img src='./public/assets/scene.png'>

### 案例功能

#### 1、园区总览
- 结合仿真的数字孪生实景，可360度全方位查看整个园区的总体概况。

#### 2、园区态势
- 可查询园区内建筑和设备的属性信息，包括建筑入驻率、建筑楼层数、车位个数等。

#### 3、安防管理
- 分层分户：可查看各楼层属性信息，如楼层数。
- 室内查看：可规划楼层功能分区，展示各区域的主要用途。
- 安防预警：通过消防安全排查，可进行消防预警，并向相关人员发送预警通知。
- 逃生路径：可规划人员逃生与救援路径。
- 人员聚集：以实时热力图的形式展示各区域人员聚集情况。

#### 4、设备管理
- 监控视频：设置地理围栏，接入监控数据，可随时调取查看监控画面。
- 设备查看：可接入IoT数据，展示地磁、路灯等设备状态。

### 项目运行

> 运行前请确保已经安装以下环境

- node.js (http://www.nodejs.com.cn/)

  #### 安装

  - 运行命令：
  ```
  npm install
  ```

  - 以 VS Code 为例，打开工程文件夹，点击 终端（Terminal） -> 新建终端（New Terminal），并在终端中输入“npm install”命令后回车即可。
  <img src='./public/assets/images/vs01.png'>

  #### 修改授权码

  > 运行前请确保已经免费获取 SDK 授权码

  - [☞ 点击免费申请](https://www.mapmost.com/#/productApply/webgl/?source_inviter=nqLdqFJp)
  - 在`src\components\Map.vue`文件中找到如下代码，将`userId`替换为您获取的授权码。
    ```js
    // 地图初始化
    let map = new mapmost.Map({
      container: 'map-container',
      name: 'ditu',
      style: style_opacity,
      doubleClickZoom: false,
      center: [120.7290563605585, 31.288141509716326],
      zoom: 17.88998700147244,
      sky: 'light',
      pitch: 64.42598133276567,
      bearing: -37.87271910936988,
      userId: '***', // 请输入您获取的授权码
      env3D: {
        defaultLights: false,
        envMap: './assets/data/yun(17).hdr',
        exposure: 2.64,
      },
    });
    ```

  #### 运行
  用于启动并运行应用程序，以便开发人员在本地进行开发和测试。
  - 运行命令：
  ```
  npm run dev
  ```

  #### 打包
  用于构建和打包你的应用程序，使其准备好在生产环境中部署。
  - 运行命令：
  ```
  npm run build
  ```

  ### 工程列表
  ``` shell
  digital-twin-park/
  │
  ├── public/                     # 公共文件，不会被Webpack处理
  │   ├── assets                  # 静态资源，如模型、图片等
  │   └── libs                    # 引用文件
  │
  ├── src/                        # 源代码目录
  │   ├── api/                    # 地图场景控制
  │   │   ├── CarApi.js           # 车辆控制
  │   │   ├── MapApi.js           # 地图设置
  │   │   └── SceneApi.js         # 环境设置
  │   │
  │   ├── assets/                 # 静态资源，如图片等
  │   │   └── images/
  │   │
  │   ├── components/             # 公共组件
  │   │   └── Map.vue
  │   │
  │   ├── layout/                 # 页面文件
  │   │   ├── LyBottom.vue
  │   │   ├── LyLeft.vue
  │   │   ├── LyRight.vue
  │   │   └── LyTop.vue
  │   │
  │   ├── App.vue                 # 主组件
  │   ├── main.js                 # 入口文件，用于创建Vue实例
  │   └── style.css               # 样式文件
  │
  ├── .gitignore                  # Git忽略文件配置
  ├── .npmrc                      # npm安装包源配置
  ├── index.html                  # 主页HTML模板
  ├── package.json                # 项目依赖和配置信息
  ├── package-lock.json           # 依赖锁定文件
  ├── README.md                   # 项目说明文档
  └── vite.config.js              # Vue项目自定义配置
  ```

### 核心依赖

- Mapmost SDK for WebGL [https://www.mapmost.com/mapmost_docs/webgl/latest/](https://www.mapmost.com/mapmost_docs/webgl/latest/?source_inviter=nqLdqFJp)
  
### 核心能力
Mapmost SDK for WebGL 提供数据、服务、可视化、分析等7大类能力，该案例主要涉及以下功能：
- 视角切换
- 三维标签
- 模型高亮
- 分层分户
- 地理围栏
- 三维特效圆
- 三维热力图
- 实时视频文件接入

### 更多参考

Mapmost [https://www.mapmost.com/#/](https://www.mapmost.com/#/?source_inviter=nqLdqFJp).


