const express=require('express');
const router=express.Router();

const {createNewTask, deleteTask}=require('../controller/taskControllers');

router.post('/createTask',createNewTask);
router.delete('/:id',deleteTask);
module.exports=router;