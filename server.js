// 借助 Express 启动项目（`build/`）
// 当然，在当前项目你并不需要这么干，默认运行 `serve -s build` 就行。
var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，如 `build/`
app.use(express.static('./build'));

//监听端口为 3002
app.listen(3002, function () {
  console.log(' app listening at http://localhost:3002');
});