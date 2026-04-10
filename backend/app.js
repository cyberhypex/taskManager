const exp=require('express');
const app=exp();
const cors=require('cors');
const GlobalErrorHandler=require('./middleware/GlobalErrorHandler')






app.use(exp.json())
app.use("/tasks",require('./routes/controllerRoutes'));
app.use(GlobalErrorHandler);
app.use(cors())





app.get("/",(req,res)=>{
    res.send('Hello, World!');
})


module.exports=app;