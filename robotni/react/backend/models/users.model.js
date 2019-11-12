const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/**
 * Layout of the users collection includes:
 * a username,
 * a password,
 * a location (zip code),
 * a set of the users plants
 * 
 * Currently only a username and password are required
 */
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        unique: false,
        minlength: 8
    },
    location: {
        type: Number,
        required: false,
        unique: false
    },
    plants: {
        type: Array,
        required: false,
        unique: false
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;