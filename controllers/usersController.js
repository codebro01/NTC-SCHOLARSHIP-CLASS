const User = require('../models/usersSchema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const getUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users)
}

const createUsers = async (req, res) => {
    let { name, age, password, email, role  } = req.body;

    
    if(role) role = role;
    else {
        role = '';
    }
    if (!name || !age || !password || !email) {
        res.status(400).json({ "message": "Name, email, age and password is required" });
        return;
    }

    const isExisting = await User.findOne({ email });

    if (isExisting) {
        res.status(400).json({ message: "Email already exist, please choose another email or login with the existing email" });
        return;
    }

    const user = await User.create({ name, password, age, email, role });

    const token = jwt.sign({userID: user._id,  name: user.name, email: user.email, age: user.age, role: user.role}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 30 });

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 5,
        sameSite: "none",
    });

    res.status(200).json({ message: "user created", user, token })
}
const login = async (req, res) => {
    const { password, email } = req.body;
    if (!password || !email) {
        res.status(400).json({ "message": "Email and password is required" });
        return;
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const verifiedPassword = await bcrypt.compare(password, user.password);
    console.log(verifiedPassword, user.password)
    if (!verifiedPassword) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({userID: user._id, name: user.name, email: user.email, age: user.age, role: user.role }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 30 });

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: (1000 * 60 * 60) / 2,
    });


    res.status(200).json({ message: "User logged in", user, token });
}



async function updateUserPut(req, res) {
    const { userID } = req.params
    console.log(req.body)
    // const {name, age} = req.body; // findOneAndUpdate, 
    const updateUser = await User.findByIdAndUpdate({ _id: userID }, { ...req.body }, { new: true, overWrite: true });
    const user = await User.findById({ _id: userID })
    res.send({ message: "user updated successfully!", data: user })
}
async function updateUserPatch(req, res) {
    const { userID } = req.params
    // const {name, age} = req.body;
    console.log(req.body)
    // const {name, age} = req.body; // findOneAndUpdate, 
    const updateUser = await User.findByIdAndUpdate({ _id: userID }, { ...req.body }, { runValidators: true, new: true });
    const user = await User.findById({ _id: userID })
    res.send({ message: "user updated successfully!", data: user })
}
async function deleteUser(req, res) {
    const { userID } = req.params
    // const {name, age} = req.body;
    if (!userID) {
        res.status(400).json({ message: "Please provide user id" })
    }
    // const {name, age} = req.body; // findOneAndUpdate, 
    const deleteUser = await User.findByIdAndDelete({ _id: userID });
    const user = await User.find({})
    res.send({ message: "user deleted successfully!", data: user })
}


module.exports = { getUsers, createUsers, updateUserPut, updateUserPatch, deleteUser, login };