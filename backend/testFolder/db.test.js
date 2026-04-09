const mongoose=require('mongoose');
const connectDB=require('../config/dbConfig');

jest.mock('mongoose');

test("Should connect to MongoDB",async()=>{
    process.env.MONGODB_CONNECTION_STRING='mock_connection_string';
    mongoose.connect.mockResolvedValueOnce();
    const logSpy=jest.spyOn(console,'log').mockImplementation(()=>{});
    await connectDB();
    expect (mongoose.connect).toHaveBeenCalledWith('mock_connection_string');
    expect(logSpy).toHaveBeenCalledWith('Connected to MongoDB');

})