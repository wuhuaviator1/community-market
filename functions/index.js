/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



const express = require('express');
const functions = require('firebase-functions');

// 导入控制器
const userController = require('./controller/UserController');
const goodsController = require('./controller/GoodsController');
const listingController = require('./controller/ListingController');
const cartController = require('./controller/CartController');

// 创建一个 Express 应用
const app = express();

// 定义路由
app.get('/users', userController.getUser);
app.post('/users', userController.createUser);
// ... 其他用户相关路由

app.get('/goods', goodsController.getGoods);
app.post('/goods', goodsController.createGoods);
// ... 其他商品相关路由

app.get('/listings', listingController.getListing);
app.post('/listings', listingController.createListing);
// ... 其他列表相关路由

app.get('/cart', cartController.getCart);
app.post('/cart', cartController.addToCart);
// ... 其他购物车相关路由

// 定义 HTTPS 函数
exports.api = functions.https.onRequest(app);

// 注意：这里假设每个控制器都有相应的方法如 getUsers, createUser 等
// 您需要根据您的实际控制器代码来调整这些方法名称
