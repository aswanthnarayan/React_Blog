const express = require('express');
const app= express();

app.use('/',(req,res)=>{
    res.send('hi')
})

app.listen('5500',()=>{
    console.log('server initialized')
})