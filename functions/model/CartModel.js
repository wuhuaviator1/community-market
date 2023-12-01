const mongoose = require("mongoose");
const Goods = require("./GoodsModel");

const cartItemSchema = new mongoose.Schema({
  goods: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Goods",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
});

// 定义一个实例方法
cartSchema.methods.addItem = async function(goodsId, quantity) {
  // 获取商品信息
  const goods = await Goods.findById(goodsId);
  if (!goods || quantity > goods.count) {
    throw new Error("商品不存在或库存不足");
  }

  // 添加商品到购物车
  this.items.push({goods: goodsId, quantity});
  return this.save();
};
cartSchema.methods.removeItem = async function(goodsId, quantityToRemove) {
  const itemIndex = this.items.findIndex((item) => item.goods.equals(goodsId));
  if (itemIndex === -1) {
    return;
  }

  this.items[itemIndex].quantity -= quantityToRemove;
  if (this.items[itemIndex].quantity <= 0) {
    this.items.splice(itemIndex, 1);
  }

  return this.save();
};

cartSchema.methods.clearCart = async function() {
  this.items = []; // 清空数组
  return this.save();
};

cartSchema.methods.checkout = async function() {
  let totalAmount = 0;
  for (const item of this.items) {
    const goods = await Goods.findById(item.goods);
    if (goods) {
      totalAmount += goods.price * item.quantity;
    }
  }

  this.items = []; // 清空购物车
  await this.save();

  return totalAmount; // 返回总金额
};

const Cart = mongoose.model("CartModel", cartSchema, "Cart");

module.exports = Cart;
