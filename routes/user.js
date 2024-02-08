const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/user',(req,res,next)=>{
    res.sendFile(path.join(__dirname , '..' ,'views','user.html'))
})


router.post('/user',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
module.exports=router