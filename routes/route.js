const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Get Request, i am tring this from another file')
});

// Router.route('/')
//     .get()
//     .patch(() => {

//     })
//     .put()

module.exports = Router;