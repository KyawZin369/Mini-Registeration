const https = require('https')
const express = require('express');
const path = require('path')
const rootDir = require('./path/path')
const bodyParser = require('body-parser')
const register = require('./routes/Register');
const userRouter = require('./routes/User')
const app = express();

app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({extended : false}))

app.set("view engine", "ejs");
app.set("views", "views");

app.use(register.route)
app.use(userRouter)

app.use((req,res,next)=>{
    res.status(404).render('404Page' , { pageTitle : "404 Not Found" })
})

app.listen('3000', 'localhost')