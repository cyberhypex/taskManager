
require('dotenv').config();
const app=require('./app');
const mongoose=require('mongoose');
const connectDB=require('./config/dbConfig');

const port=3000;

connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`server listens at ${port}`);
})
});
