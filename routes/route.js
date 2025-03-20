const express = require('express');
const Router = express.Router();
const { getUsers, createUsers } = require('../controllers/usersController.js')

//http://localhost:5000/api/v1/users
Router.route('/users')
    .get(getUsers)
    .post(createUsers)
// .put()
// .patch()
// .delete()



// Router.get('/', (req, res) =>{
//     res.send('Get Request, i am tring this from another file')
// })

// Router.post('/', (req, res) => {
//     res.status(200).json({ "message": "Post Request succesfull" })
// })



// //! put request
// Router.put('/', (req, res) => {
//     res.status(200).json({ "message": "Put Request succesfull" })
// })
// //! patch request
// Router.patch('/', (req, res) => {
//     res.status(500).json({ "message": "Patch Request succesfull" })
// })
// //! delete request
// Router.delete('/', (req, res) => {
//     res.status(200).json({ "message": "Delete Request succesfull" })
// })


// Router.get('/',() =>{})
// Router.delete('/',() =>{})
// Router.patch('/',() =>{})

// Router.route('/')
//     .get()
//     .patch(() => {

//     })
//     .put()

module.exports = Router;