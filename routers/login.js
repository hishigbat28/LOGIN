const express = require('express');
const router = express.Router();
const path = require('path')



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})
router.post('/',async(req,res)=>{
    if(req.body.un=="u" && req.body.pw=="pw"){
        res.redirect('/')
    }
    else{
        res.send('failed....')
    }
});
module.exports=router