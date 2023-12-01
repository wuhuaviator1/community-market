const mongoose = require('mongoose');
const Goods = require('../model/GoodsModel');
const listingSchema = new mongoose.Schema({
    goods: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goods',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});
listingSchema.methods.displayGoods = async function() {
    return await this.populate('goods').execPopulate();
};
listingSchema.methods.uploadGoods = async function(goodsData) {
    const goods = new Goods(goodsData);
    await goods.save(); // 保存新商品

    this.goods.push(goods);
    return this.save(); // 更新列表
};

const Listing = mongoose.model('ListingModel', listingSchema, "Listing");

module.exports = Listing;
