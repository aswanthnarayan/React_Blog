//initialize express
const express = require('express');
const app= express();
//initialize dotenv
const dotenv = require('dotenv');
dotenv.config()
//initialize mongoose and connected to server
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then(console.log('connected to mongo'))
.catch((err)=>{
    console.log(err)
});


app.listen('5500',()=>{
    console.log('server initialized')
})