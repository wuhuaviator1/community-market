const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    uid:{
        type: String,
        required: true,
        unique: true
    },
    cart: {
        items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goods'
        }]
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
    }],
    userProfile: [{
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    }]
});

const User = mongoose.model('UserModel', userSchema, "users");
// const UserUid = mongoose.model('UserUid', userUidSchema, "userUids");


module.exports = User;
