const request=require('supertest');
const app=require('../app');
const mongoose=require('mongoose')

const taskModel=require('../models/taskModel');

jest.mock('../models/taskModel',()=>({
    findByIdAndUpdate:jest.fn()
}))

test("Update task status successfully",async()=>{
    const mockID="507f1f77bcf86cd799439011";
    const mock_task={
        _id:mockID,
        title: "Test Task",
        completed: false
    }
    jest.spyOn(mongoose.Types.ObjectId,"isValid").mockReturnValue(true);
    taskModel.findByIdAndUpdate.mockResolvedValue(mock_task);

    const res = await request(app)
            .patch(`/tasks/update/${mockID}`)
            .send({ completed: true });

    expect(res.statusCode).toBe(200);
    expect(taskModel.findByIdAndUpdate).toHaveBeenCalledWith(
            mockID,
            { completed:true },
            { new: true }
        );

    expect(res.body.message).toBe("Task status updated successfully");
   
})