const express = require('express');
const userRouter = express.Router();
const userInformation = require('./Register')

userRouter.get('/user', (req,res,next)=>{
    const Name = userInformation.userInformation
    res.render('users' , { pageTitle : "Users", userName : Name})
})

module.exports = userRouter;