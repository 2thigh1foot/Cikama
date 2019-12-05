const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// Validato r used for user emails
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

/**
 * Layout of the users collection includes:
 * a username,
 * a password,
 * a zipcode (zip code),
 * a set of the users plants
 * 
 * Currently only a username and password are required
 */
const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password_hash: {
        type: String,
        required: true
    },
    zipcode: {
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