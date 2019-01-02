# dva-mooc

### 一、dva创建项目

```powershell
> dva new dva-mooc
> cd dva-mooc
> npm start
```

### 二、配置antd-mobile

```po
npm install antd-mobile babel-plugin-import --save
```

编辑 `.webpackrc`，使 `babel-plugin-import` 插件生效

```json
 "extraBabelPlugins": [
   ["import", { "libraryName": "antd-mobile", "style": "css" }]
 ]
```

### 三、去除路由#

```javascript
import createHistory from 'history/createBrowserHistory';
// 1. Initialize
const app = dva({
  history: createHistory(),
});
```

