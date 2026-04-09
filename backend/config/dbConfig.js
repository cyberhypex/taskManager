const mongoose=require('mongoose');
const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to mongoDB',error);
        
    }
}

module.exports=connection;