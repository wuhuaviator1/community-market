const Goods = require('../model/GoodsModel');

exports.getAllGoods = async (req, res) => {
    try {
        const goodsList = await Goods.find({});
        res.send(goodsList);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getGoodsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const goodsInCategory = await Goods.find({ category: category });
        res.send(goodsInCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};
