// app.js
require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectMongoDB = require('./db'); // 导入db.js中的函数

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ApiRouter = require('./routes/ApiRoutes');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", ApiRouter);

// ...省略错误处理器和404处理器的代码...

const port = process.env.PORT || 3001;
async function startServer() {
  await connectMongoDB(); // 连接数据库
  app.listen(port, () => {
    console.log(`服务器正在端口 ${port} 上运行`);
  });
}

startServer().catch(console.error);

module.exports = app;
