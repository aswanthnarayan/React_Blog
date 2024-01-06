const express = require('express'); //initialize express
const dotenv = require('dotenv');//initialize dotenv
const mongoose = require('mongoose'); //initialize mongoose
const authRoute = require('./routes/auth') 


dotenv.config() 
const app= express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(console.log('connected to mongo'))
.catch((err)=>{
    console.log(err)
});

app.use('/auth',authRoute)

//express server
app.listen('5500',()=>{
    console.log('server initialized')
})