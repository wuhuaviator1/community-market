const User = require("../model/UserModel");

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ uid: req.params.uid });
    if (!user) {
      user = new User({ uid: req.params.uid });
      await user.save();
      res.status(201).send(user); // 新用户创建
    } else {
      res.status(200).send(user); // 已存在的用户
    }
  } catch (error) {
    res.status(500).send(error); // 服务器错误
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.findUserByUId = async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.params.uid });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
// 获取所有用户
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Internal Server Error");
  }
};

// 获取单个用户
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("cart.items")
      .populate("listings");
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// 更新用户信息
exports.updateUserProfile = async (req, res) => {
  try {
    const uid = req.params.uid;
    const userProfileUpdates = req.body.userProfile;

    const user = await User.findOneAndUpdate(
      { uid: uid },
      { $set: { userProfile: userProfileUpdates } },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// 删除用户
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
