const exp=require('express');
const app=exp();

app.use(exp.json())

const mongoose=require('mongoose');
const connectDB=require('./config/dbConfig');


app.get("/",(req,res)=>{
    res.send('Hello, World!');
})
connectDB();
module.exports=app;