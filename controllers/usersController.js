const User = require('../models/usersSchema.js')

const getUsers = async (req, res) =>{
    const users = await User.find({});
    res.status(200).json(users)
}

const createUsers = async (req, res) => {
    const {name, age} = req.body;
    
    const user = await User.create({name: name, age: age});

    res.status(200).json({message: "user created"})
}


module.exports = { getUsers, createUsers };