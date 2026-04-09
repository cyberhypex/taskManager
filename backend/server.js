const exp=require('express');
const app=exp();

const port=3000;

app.listen(port,()=>{
    console.log(`server listens at ${port}`);
})
app.get("/",(req,res)=>{
    res.send('Hello, World!');
})