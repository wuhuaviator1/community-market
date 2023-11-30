const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
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
        name: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zip: String,
    }]
});

const User = mongoose.model('UserModel', userSchema, "users");

module.exports = User;
