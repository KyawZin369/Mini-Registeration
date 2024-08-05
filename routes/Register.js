const express = require('express');
const registerRouter = express.Router();

const userInformation = []

registerRouter.get('/', (req,res,next)=>{
    res.render('form' , { pageTitle : "User Registeration" })
})

registerRouter.post('/Registeration', (req,res,next)=>{
    res.redirect('/user')
    userInformation.push(req.body.username)
})

module.exports.route = registerRouter;
module.exports.userInformation = userInformation;