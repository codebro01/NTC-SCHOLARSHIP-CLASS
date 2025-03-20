const mongoose = require('mongoose');

// const UserSchema = mongoose.Schema({

// })

const { Schema, model } = require('mongoose')


const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
});

const User = model('users', UserSchema)
module.exports = User;

