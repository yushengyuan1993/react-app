#### 2019-05-20
  - add `scss`, `npm i node-sass -D`, [docs](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet);
  - 尝试使用 `Express.js` 打开静态文件，安装 `express.js`， `npm i express -D`。
#### 2019-05-21
  - 当需要修改 `create-react-app` 默认的 `webpack` 配置时，我们可以做以下工作：
    1. 引入 `react-app-rewired` 并修改 package.json 里的启动配置。由于新的 `react-app-rewired@2.x` 版本的关系，你还需要安装 `customize-cra`。
        ```sh
        npm install react-app-rewired customize-cra --save-dev
        ```
        ```json
        // package.json
        "scripts": {
        -   "start": "react-scripts start",
        +   "start": "react-app-rewired start",
        -   "build": "react-scripts build",
        +   "build": "react-app-rewired build",
        -   "test": "react-scripts test --env=jsdom",
        +   "test": "react-app-rewired test --env=jsdom",
        }
        ```
    2. 然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。
        ```js
        module.exports = function override(config, env) {
          // do stuff with the webpack config...
          return config;
        };
        ```
    3. 使用 `babel-plugin-import`, babel-plugin-import 是一个用于按需加载组件代码和样式的 `babel` 插件，现在我们尝试安装它并修改 `config-overrides.js` 文件。
        ```sh
        npm install babel-plugin-import --save-dev
        ```
        ```js
        + const { override, fixBabelImports } = require('customize-cra');

        - module.exports = function override(config, env) {
        -   // do stuff with the webpack config...
        -   return config;
        - };
        + module.exports = override(
        +   fixBabelImports('import', {
        +     libraryName: 'antd-mobile',
        +     style: 'css',
        +   }),
        + );
        ```
    4. 按需引入
        ```js
        - import Button from 'antd-mobile/lib/button';
        + import { Button } from 'antd-mobile';
        ```
    5. 更改后的 `package.json` 如下：
        ```json
        {
          "name": "create-react-app",
          "version": "0.1.0",
          "private": true,
          "dependencies": {
            "antd-mobile": "^2.0.0",
            "node-sass": "^4.12.0",
            "react": "^15.6.1",
            "react-dom": "^15.6.1",
            "react-scripts": "1.0.13"
          },
          "scripts": {
            "start": "react-app-rewired start",
            "build": "react-app-rewired build",
            "test": "react-app-rewired test --env=jsdom",
            "eject": "react-scripts eject"
          },
          "devDependencies": {
            "babel-plugin-import": "^1.2.0",
            "less": "^2.7.3",
            "less-loader": "^4.0.5",
            "react-app-rewired": "^1.2.9"
          }
        }
        ```
  - 添加 `react-router-dom`:
      ```sh
      npm install react-router-dom
      ```
    