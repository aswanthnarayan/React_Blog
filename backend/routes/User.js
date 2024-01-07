const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//UPDATE USER

router.put('/:id',async (req,res)=>{
   if(req.body.id === req.params.id){ // check is user is valid
    if(req.body.password){
        const salt= await bcrypt.genSalt(10);
        req.body.password= await bcrypt.hash(req.body.password,salt) // hash the updated password
        }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{ //search and update user accoding to id
            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
   }
   else{
    res.status(401).json('Youcan only update Your Account')
   }
})



//DELETE USER/ACCOUNT

router.delete('/:id',async (req,res)=>{
    if(req.body.id === req.params.id){ // check is user is valid
     try {
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json('User has been deleted !')
     } catch (error) {
         res.status(500).json(error)
     }
    }
    else{
     res.status(401).json('Youcan only Delete Your Account')
    }
 })


 //GET USER DATA

 router.get('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
 })




module.exports=router