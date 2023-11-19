require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// MongoDB URI
const uri = process.env.MONGODB_URI;

// 创建一个MongoClient
const client = new MongoClient(uri);

// 连接到MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("成功连接到MongoDB!");
  } catch (err) {
    console.error("无法连接到MongoDB:", err);
    process.exit(1);
  }
}

// 初始化Express应用
async function startExpressApp() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  // 捕获404并转发到错误处理器
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // 错误处理器
  app.use(function(err, req, res, next) {
    // 设置本地变量，只在开发环境中提供错误
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.locals.title = '错误'; // 为错误页面添加标题

    // 渲染错误页面
    res.status(err.status || 500);
    res.render('error');
  });

  // 开始监听端口
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`服务器正在端口 ${port} 上运行`);
  });
}

// 连接数据库并启动应用
connectToMongoDB().then(startExpressApp).catch(console.error);

module.exports = app;
