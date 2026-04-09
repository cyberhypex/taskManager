const exp=require('express');
const app=exp();


app.get("/",(req,res)=>{
    res.send('Hello, World23!');
})

module.exports=app;