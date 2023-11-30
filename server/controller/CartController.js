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

// 更新购物车内容
exports.updateCart = async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { owner: req.user._id },
            { $set: { items: req.body.items } },
            { new: true, runValidators: true }
        ).populate('items.goods');

        if (!cart) {
            return res.status(404).send();
        }
        res.send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
};

// 删除购物车
exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findOneAndDelete({ owner: req.user._id });
        if (!cart) {
            return res.status(404).send();
        }
        res.send({ message: 'Cart successfully deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};
