const request=require('supertest');
const app=require('../app');
const mongoose=require('mongoose')

const taskModel=require('../models/taskModel');

jest.mock('../models/taskModel', () => ({
    find: jest.fn()
}));

test("Should get all tasks successfully",async()=>{
    const mockTasks = [
            {
                title: "Task 1",
                completed: false,
                createdAt: "now"
              
            },
            {
                title: "Task 2",
                completed: true,
                createdAt: "now"
                
            }
    ];

    taskModel.find.mockResolvedValue(mockTasks);

    const res = await request(app).get("/tasks/allTasks");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0].title).toBe("Task 1");
    

})