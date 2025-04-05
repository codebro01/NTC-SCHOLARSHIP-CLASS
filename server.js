// const express = require('express')
// const { createServer } = require('node:http')
// const { join } = require('node:path')
// const { Server } = require('socket.io')

// const app = express()
// const server = createServer(app)
// const io = new Server(server)

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'))
// })

// // io.on('connection', (socket) => {
// //   console.log('a user connected')
// //   socket.on('disconnect', () => {
// //     console.log('user disconnected')
// //   })
// // })

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg)
//   })
// })

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000')
// })

require('dotenv').config()
require('express-async-errors')
const express = require('express')
const { join } = require('path')
const mongoose = require('mongoose')
const HttpStatusCodes = require('http-status-codes')
const Router = require('./routes/route.js')
const app = express()
const cookieParser = require('cookie-parser')
const NotFoundMiddleware = require('./middlewares/notFoundMiddleware.js')
const ErrorMiddleware = require('./middlewares/errorMiddleware.js')

app.use(cookieParser())
app.use(express.json())

const PORT = process.env.PORT || 5000

// console.log(cookieParser())
// ! Get request

app.get('/', (req, res) => {
    res.status(200).json({message: "Our NTC Schoolarship API is ready!! 🚀"})
})

app.use('/api/v1', Router);


// console.log(HttpStatusCodes)
// app.use('/api/v1/auth', fightforLove);

app.use(NotFoundMiddleware)

app.use(ErrorMiddleware)

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
  await mongoose.connect(MONGO_URI)
  console.log('db connected')
}

const startDB = async () => {
  await connectDB(process.env.MONGO_URI)
  app.listen(PORT, () => {
    console.log(`App is listening at Port : ${PORT}`)
  })
}
startDB()

