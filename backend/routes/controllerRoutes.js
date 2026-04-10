const express=require('express');
const router=express.Router();

const {createNewTask, deleteTask,getAllTasks,updateTaskStatus}=require('../controller/taskControllers');

router.post('/createTask',createNewTask);
router.delete('/:id',deleteTask);
router.get('/allTasks',getAllTasks);
router.patch('/update/:id',updateTaskStatus);
module.exports=router;