require('dotenv').config();
const express = require('express');
const {join} = require('path')
const Router = require('./routes/route.js')

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 5000;


// ! Get request

app.get('/', Router)

console.log('HELLO WORLD')
app.use('/', authMiddleware, fightforLove);
//! post request

app.post('/', (req, res) => {
    res.status(200).json({"message": "Post Request succesfull"})
})



//! put request
app.put('/', (req, res) => {
    res.status(200).json({ "message": "Put Request succesfull" })
})
//! patch request
app.patch('/', (req, res) => {
    res.status(500).json({ "message": "Patch Request succesfull" })
})
//! delete request
app.delete('/', (req, res) => {
    res.status(200).json({ "message": "Delete Request succesfull" })
})

app.get('/', console.log('get'))

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
})






// console.log(join(__dirname, 'index.html'))

// app.use(express.static(join(__dirname, 'index')))


// app.get('/home', (req, res) =>{
//     res.send('Home page')
// })

//  post man, thunderclient ====> api testing tools


app.listen(PORT, () =>{
    console.log(`App is listening at Port : ${PORT}`)
})

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




