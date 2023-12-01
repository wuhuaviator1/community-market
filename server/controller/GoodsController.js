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
exports.getGoodsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const goodsByName = await Goods.find({ name: new RegExp(name, 'i') }); // 使用正则表达式进行不区分大小写的匹配
        res.send(goodsByName);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Goods.distinct("category");
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};
