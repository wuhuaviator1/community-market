const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    date: { type: Date, default: Date.now },
});

const Goods = mongoose.model('GoodsModel', goodsSchema, "Goods");

module.exports = Goods;
