require('dotenv').config();
const express = require('express');
const { join } = require('path')
const mongoose = require('mongoose');
const Router = require('./routes/route.js')
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.json());


const PORT = process.env.PORT || 5000;

// console.log(cookieParser())
// ! Get request

app.use('/api/v1',   Router);
console.log('HELLO WORLD')
// app.use('/api/v1/auth', fightforLove);




// app.get('/ab*cd', (req, res) => {
//     res.send('ab*cd')
// })






// console.log(join(__dirname, 'index.html'))

// app.use(express.static(join(__dirname, 'index')))


// app.get('/home', (req, res) =>{
//     res.send('Home page')
// })

//  post man, thunderclient ====> api testing tools


// get: Read files
//post: create files
//put: Replace created files
// patch: updates files
//delete: deletes or removes files
// middlewares
// use
// CRUD OPERATION
// c - create
// r - read
// u - update
// d - delete

// console.log(process.env.MONGO_URI)

// const checkCookieMethod = ((req, res) => {
//     console.log(req)
// })();

const connectDB = async (MONGO_URI) => {
    await mongoose.connect(MONGO_URI);
    console.log('db connected');
}

const startDB = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
        console.log(`App is listening at Port : ${PORT}`)
    })
}
startDB();






