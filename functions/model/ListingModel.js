const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  seller: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  goods: [{type: mongoose.Schema.Types.ObjectId, ref: "Goods"}],
  title: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  status: String,
  date: {type: Date, default: Date.now},
});

const ListingModel = mongoose.model("ListingModel", listingSchema, "Listing");

module.exports = ListingModel;
