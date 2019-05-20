var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，如 `build/`
app.use(express.static('./build'));

//监听端口为3001
app.listen(3001, function () {
  console.log(' app listening at http://localhost:3001');
});