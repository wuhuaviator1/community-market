const express = require("express");
const router = express.Router();

const userController = require("../controller/UserController");
const goodsController = require("../controller/goodsController");
const listingController = require("../controller/listingController");
const cartController = require("../controller/cartController");
// 用户路由
// /api/users
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.put("/users/profile/:uid", userController.updateUserProfile);
router.delete("/users/:id", userController.deleteUser);

router.post("/login/:uid", userController.login);
// 商品路由
router.post("/goods", goodsController.createGoods);
router.get("/goods", goodsController.getAllGoods);
router.get("/goods/:id", goodsController.getGoods);
router.put("/goods/:id", goodsController.updateGoods);
router.delete("/goods/:id", goodsController.deleteGoods);

// 上架商品路由
router.post("/listings", listingController.createListing);
router.get("/listings", listingController.getAllListings);
router.get("/listings/:id", listingController.getListing);
router.put("/listings/:id", listingController.updateListing);
router.delete("/listings/:id", listingController.deleteListing);

// 购物车路由
router.post("/carts", cartController.createCart);
router.get("/carts", cartController.getCart);

module.exports = router;
