const request = require('supertest');
const app = require('../app');
const taskModel=require('../models/taskModel');

jest.mock('../models/taskModel', () => ({
    create: jest.fn()
}));
test("Create Task Endpoint", async () => {
    taskModel.create.mockResolvedValue({
        title: "test task",
        completed: false,
        createdAt: "now",
        
    });

    const res = await request(app)
        .post("/tasks/createTask")
        .send({ title: "test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("test task");
});