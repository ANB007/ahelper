# ahelper

### 项目描述：

js 工具库，包含一些工具方法、类

## 项目结构：

```jsx
.
├── README.md
├── dist                打包产物
│   ├── ahelper.cjs.js
│   ├── ahelper.esm.js
│   └── ahelper.umd.js
├── jest.config.js      单测配置
├── package.json
├── rollup.config.js    rollup 打包配置
├── src                 项目源码
│   ├── BaseEnum
│   │   └── index.ts
│   └── index.ts        入口文件
├── test                单测文件
│   └── BaseEnum.test.ts
├── tsconfig.json       ts 配置
├── yarn-error.log
└── yarn.lock
```

### 如何添加新功能

- 拉取最新的 main 分支代码，创建开发分支，分支命名格式：`[feature || hotfix]/[功能模块]_[开发者姓名]_[日期]`，例如：`feature/computer_qiming_2021520` ，**注意：新功能开发使用 `feature` 前缀，bug 修复使用 `hotfix`**
- 在 `./src` 中添加新模块的文件夹，以大驼峰格式命名，在该文件夹下创建源码文件，该模块的入口文件统一命名为 `index.ts`
- 在 `./src/index.ts` 中引入新模块并且导出
- 在 `./test` 文件夹中创建该模块的测试用例文件，以大驼峰格式命名
- 在单测通过的情况下才能发布！

### 如何发布

- 发布使用 `np` 工具进行 npm 包发布，所以先安装 np `yarn global add np`
- 发布前要确定当前开发分支已经合并到 main 分支，并且终端切换到 main 分支进行发布
- 运行：`yarn build` ，进行打包
- 运行：`np`，开始发布，请注意版本号规范：

```html
主版本号(major)：当你做了不兼容的 API 修改(大版本修改)
次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为 Feature 版本
修订号(patch)：当你做了向下兼容的问题修正，可以理解为 Bug fix 版本
```

### 可能会遇到的问题

1. 发布时，git 连接超时
   1. 检查网络
   2. 给 github 添加本地 host 代理
   3. 如果开了 vpn，可以配置 git 代理，参考：[https://gist.github.com/chuyik/02d0d37a49edc162546441092efae6a1](https://www.notion.so/02d0d37a49edc162546441092efae6a1)
