// UserUidController.js
const User = require('../model/UserModel');

// 通过 UID 获取用户
exports.getUserByUid = async (req, res) => {
    exports.addUserUid = async (req, res) => {
        try {
            const uid = req.body.uid;
            const user = new User({ uid: uid });
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    };
};


// 删除 UID
exports.deleteUid = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ uid: req.params.uid });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};
