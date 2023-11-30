const express = require("express");
const router = express.Router();

const userController = require("../controller/UserController");
const goodsController = require("../controller/goodsController");
const listingController = require("../controller/listingController");
const cartController = require("../controller/cartController");
// 用户路由
// /api/users
router.get("/users/:uid", userController.findUserByUId)
router.get('/users/profile/:uid', userController.getUserProfileByUid);
router.put("/users/profile/:uid", userController.updateUserProfile);
router.delete("/users/:id", userController.deleteUser);
router.post("/login/:uid", userController.login);
// 商品路由

module.exports = router;
