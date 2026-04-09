const request=require('supertest');
const app=require('../app');

test("GET / Should return Hello World",async()=>{
    const res=await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, World!');
})

test("This is a second test",async()=>{
    const res=await request(app).get("/failingTest");
    expect (res.statusCode).toEqual(404);
    
})