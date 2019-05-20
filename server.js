// 借助 Express 在启动项目

var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，如 `build/`
app.use(express.static('./build'));

//监听端口为 3002
app.listen(3002, function () {
  console.log(' app listening at http://localhost:3002');
});