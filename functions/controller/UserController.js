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
// 更新用户信息
exports.getUserProfileByUid = async (req, res) => {
  try {
    const uid = req.params.uid;

    const user = await User.findOne({ uid: uid }, "userProfile"); // 只查询 userProfile 字段

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user.userProfile);
  } catch (error) {
    res.status(400).send(error);
  }
};

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
