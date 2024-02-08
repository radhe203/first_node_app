const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const errorRoute = require('./routes/error');
const path = require('path');
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname , 'public')))
app.use('/admin',userRoute)
app.use(homeRoute)
app.use(errorRoute)


app.listen(5000);