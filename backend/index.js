const express = require('express');  //initialize express
const dotenv = require('dotenv');//initialize dotenv
const mongoose = require('mongoose'); //initialize mongoose
const multer = require('multer');
const cors = require('cors');
const path = require("path");


const authRoute = require('./routes/auth') 
const userRoute = require('./routes/User')
const postRoute = require('./routes/Post')
const CategoriesRoute = require('./routes/Categories')




dotenv.config() 
const app= express();
app.use(cors());
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


mongoose.connect(process.env.MONGO_URL)
.then(console.log('connected to mongo'))
.catch((err)=>{
    console.log(err)
});


//multer for file upload
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage:storage});

app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json('file has been uploaded')
})

app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/categories',CategoriesRoute)


//express server
app.listen('3300',(req,res)=>{
    console.log('server initialized')
})

