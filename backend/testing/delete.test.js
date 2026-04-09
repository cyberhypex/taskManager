const request=require('supertest');
const app=require('../app');
const mongoose=require('mongoose')

const taskModel=require('../models/taskModel');

jest.mock('../models/taskModel',()=>({
    findByIdAndDelete:jest.fn()
}));

test("Delete task successfully",async()=>{
    const mockId="507f1f77bcf86cd799439011";
    jest.spyOn(mongoose.Types.ObjectId, "isValid").mockReturnValue(true);
    taskModel.findByIdAndDelete.mockResolvedValueOnce({
        _id:mockId
        

        
    })
    
    const res=await request(app).delete(`/tasks/${mockId}`);
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Task deleted successfully");
})