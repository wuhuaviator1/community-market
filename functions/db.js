// db.js
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function connectMongoDB() {
  try {
    await mongoose.connect(uri, {
    });
    console.log("成功连接到MongoDB!");
  } catch (error) {
    console.error("连接到MongoDB失败:", error);
    process.exit(1);
  }
}

module.exports = connectMongoDB;
