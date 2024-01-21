const express =require('express');
const signUpModel = require('../../config/DB/Models/signUpModel');
const router=express.Router();

router.post('/admin',async(req,res)=>{
        const data=req.body;
        console.log(data)
        if(data.code==20021117){
            const users=await(signUpModel.find({}));
            res.send(users);
        }
    else(
        res.send('Your Code Is Error!')
    )
})
module.exports=router;