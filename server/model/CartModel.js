const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
        goods: { type: mongoose.Schema.Types.ObjectId, ref: 'Goods' },
        quantity: Number
    }]
});

const Cart = mongoose.model('CartModel', cartSchema, "Cart");

module.exports = Cart;
