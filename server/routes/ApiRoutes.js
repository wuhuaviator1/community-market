const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');
const goodsController = require('../controller/goodsController');
const listingController = require('../controller/listingController');
const cartController = require('../controller/cartController');
const userUidController = require('../controller/UserUidController');
// 用户路由
// /api/users
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// 用户UID
router.get('/user/:uid', userUidController.getUserByUid);
router.delete('/users/:id', userUidController.deleteUid);

// 商品路由
router.post('/goods', goodsController.createGoods);
router.get('/goods', goodsController.getAllGoods);
router.get('/goods/:id', goodsController.getGoods);
router.put('/goods/:id', goodsController.updateGoods);
router.delete('/goods/:id', goodsController.deleteGoods);

// 上架商品路由
router.post('/listings', listingController.createListing);
router.get('/listings', listingController.getAllListings);
router.get('/listings/:id', listingController.getListing);
router.put('/listings/:id', listingController.updateListing);
router.delete('/listings/:id', listingController.deleteListing);

// 购物车路由
router.post('/carts', cartController.createCart);
router.get('/carts', cartController.getCart);
router.put('/carts', cartController.updateCart);
router.delete('/carts', cartController.deleteCart);

module.exports = router;
