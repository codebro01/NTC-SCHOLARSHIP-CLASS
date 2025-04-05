const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const UserSchema = mongoose.Schema({

// })

const { Schema, model } = require('mongoose')


const UserSchema = Schema({
    name: {
        type: String, // Strings, Numbers, Booleans, {}, [], mongoose.schema.types.objectId,
        required: true,
    },
    email: {
        type: String, // Strings, Numbers, Booleans, {}, [], mongoose.schema.types.objectId,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Minimum of 5 characters is required for password'],
    },
    age: {
        type: Number,
        required: [true, 'Please age is required!!!'],
    },
    role: {
        type: String, 
        enum: ['admin', 'user'], 
        default: 'user', 
    }
}, {timestamps: true});


UserSchema.pre('save', async function () {

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})


const User = model('users', UserSchema)
module.exports = User;

