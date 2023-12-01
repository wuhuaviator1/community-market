const Cart = require('../model/CartModel');

// 创建购物车
exports.createCart = async (req, res) => {
    try {
        const newCart = new Cart({
            owner: req.user._id, // Assuming req.user is populated by an authentication middleware
            items: req.body.items,
        });
        await newCart.save();
        res.status(201).send(newCart);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.addGoodsToCart = async (req, res) => {
    try {
        const userId = req.user._id; // 假设从认证中获取用户ID
        const { goodsId, quantity } = req.body;

        // 首先，找到用户的购物车
        let cart = await Cart.findOne({ owner: userId });
        if (!cart) {
            cart = new Cart({ owner: userId });
        }

        // 使用模型中定义的方法添加商品
        await cart.addItem(goodsId, quantity);

        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// 获取用户的购物车
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ owner: req.user._id }).populate('items.goods');
        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
};


// 减少商品数量
exports.reduceItemInCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const { goodsId, quantity } = req.body;

        const cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).send('购物车不存在');
        }

        await cart.removeItem(goodsId, quantity);
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// 清空购物车
exports.clearCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).send('购物车不存在');
        }

        await cart.clearCart();
        res.status(200).send(cart);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// 结账
exports.checkoutCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const cart = await Cart.findById(cartId);
        if (!cart) {
            return res.status(404).send('购物车不存在');
        }

        const totalAmount = await cart.checkout();
        res.status(200).send({ message: '结账成功', totalAmount });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
