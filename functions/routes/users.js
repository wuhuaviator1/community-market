const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();
// const User = require("../model/UserModel");


// routes/users.js
const connectMongoDB = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const db = await connectMongoDB();
    const accounts = await db.collection("accounts").find({}).toArray();
    res.json(accounts);
  } catch (err) {
    console.error(err);
    res.status(500).send("无法获取数据");
  }
});


module.exports = router;
