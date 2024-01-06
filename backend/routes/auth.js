const express = require('express');
const router = express.Router();
const User = require('../models/User');

// In Express.js, routers are used to handle different sets of routes for your application. They allow you to organize your routes and handlers into separate modules or files, making your code more maintainable and easier to understand.

//REGISTER

router.post('/register',async (req,res)=>{
    try {
        const newUser = new User(
            {
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            }
        );
        const user = await newUser.save() //save is a function comes from mongoose to save data to db
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports=router