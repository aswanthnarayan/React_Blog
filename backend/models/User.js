const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:"welcome To My Profile"  
    }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)