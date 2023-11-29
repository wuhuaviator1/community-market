// userUidRoutes.js
const express = require('express');
const router = express.Router();
const UserUidController = require('../controller/UserUidController');


// 通过 UID 获取用户的路由
router.get('/uid/:uid', UserUidController.getUserByUid);

// 删除 UID 的路由
router.delete('/uid/:uid', UserUidController.deleteUID);

module.exports = router;
