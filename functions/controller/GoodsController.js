const Goods = require("../model/GoodsModel");

exports.createGoods = async (req, res) => {
  try {
    const newGoods = new Goods(req.body);
    await newGoods.save();
    res.status(201).send(newGoods);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllGoods = async (req, res) => {
  try {
    const goodsList = await Goods.find({});
    res.send(goodsList);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGoods = async (req, res) => {
  try {
    const goods = await Goods.findById(req.params.id);
    if (!goods) {
      return res.status(404).send();
    }
    res.send(goods);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateGoods = async (req, res) => {
  try {
    const goods = await Goods.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true});
    if (!goods) {
      return res.status(404).send();
    }
    res.send(goods);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteGoods = async (req, res) => {
  try {
    const goods = await Goods.findByIdAndDelete(req.params.id);
    if (!goods) {
      return res.status(404).send();
    }
    res.send({message: "Goods successfully deleted"});
  } catch (error) {
    res.status(500).send(error);
  }
};
