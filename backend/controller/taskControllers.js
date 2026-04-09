const taskModel=require('../models/taskModel');
const taskDTO=require('../models/DTOs/taskModelDTO');
const CustomError=require('../utils/customErrorHandling/customError');

const mongoose=require('mongoose');

//->Create a new task

const createNewTask=async(req,res,next)=>{
    try {
        const {title}=req.body;
        if(!title){
            throw new CustomError("Title can't be empty",400);
        }

        const newTask=await taskModel.create({title});
        res.status(201).json(
            taskDTO(newTask)
        )
    } catch (error) {
        next(error);
    }
}

//->delete a task
const deleteTask=async(req,res,next)=>{
    try{
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new CustomError("Task not found",404);
        }
        const deletedTask=await taskModel.findByIdAndDelete(id);
        console.log(deletedTask)
        if(!deletedTask){
            throw new CustomError("Task not found",404);
        }
        res.status(200).json({
            message:"Task deleted successfully"
        })
    }catch(error){
        next(error);
    }
}

module.exports={
    createNewTask,
    deleteTask
}