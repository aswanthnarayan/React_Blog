const express = require('express');
const router = express.Router();
// const User = require('../models/User');
const Post = require('../models/Post');



//CREATE NEW POST

router.post('/',async (req,res)=>{
    const newPost= await new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})


//UPDATE A POST

router.put('/:id',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                  const updatedPost = await Post.findByIdAndUpdate(req.params.id ,{
                    $set:req.body
                  },{new:true})      
                  res.status(200).json(updatedPost)
            } catch (error) {
                 res.status(500).json(error)
            }
        }
        else{
            res.status(401).json("You Can Only Edit Your Posts")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})


//DELETE USER/ACCOUNT

router.delete("/:id", async (req, res) => {
        try {
            const postToDelete = await Post.findById(req.params.id);
            if(postToDelete.username === req.body.username){
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted !')
            }
            else{
            res.status(401).json('something went wrong !')
            }
        } catch (error) {
            res.status(500).json(error)
        }
     
  });


 //GET USER DATA


router.get('/:id',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
 })


 //GET ALL POST FROM USER
 router.get('/',async (req,res)=>{
    const username = req.query.user;
    const category = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username:username})
        }
        else if(category){
            posts = await Post.find({categories:{$in:[category]}}) //checking category wuiery in categories array on DB
        }
        else{
            posts = await Post.find()
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
 })


module.exports=router