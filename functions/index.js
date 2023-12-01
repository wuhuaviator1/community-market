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

// 导入 ApiRouter
const ApiRouter = require('./routes/ApiRoutes');

// 创建一个 Express 应用
const app = express();

// 使用 ApiRouter
app.use('/api', ApiRouter);

// 定义 HTTPS 函数
exports.api = functions.https.onRequest(app);

