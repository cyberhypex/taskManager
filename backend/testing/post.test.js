const request = require('supertest');
const app = require('../app');
const taskModel=require('../models/taskModel');


test("Create Task Endpoint", async () => {
    const mockTask = {
        
        title: "test task",
        
        
    };

  //  taskModel.create.mockResolvedValue(mockTask);

    const res = await request(app)
        .post("/tasks/createTask")
        .send({ title: "test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("test task");
});