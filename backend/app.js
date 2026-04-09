const exp=require('express');
const app=exp();


app.get("/",(req,res)=>{
    res.send('Hello, World!');
})

module.exports=app;