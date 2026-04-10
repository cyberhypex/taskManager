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
     //   console.log(deletedTask)
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

const getAllTasks=async(req,res,next)=>{
    try{
        const tasks=await taskModel.find();
        res.status(200).json(
            tasks.map(task=>taskDTO(task))
        );
    }catch(error){
        next(error);
    }
}

const updateTaskStatus=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const {completed}=req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new CustomError("Task not found",404);
        }
        const updatedTask=await taskModel.findByIdAndUpdate(id,{completed},{new:true});
        if(!updatedTask){
            throw new CustomError("Task not found",404);
        }
        res.status(200).json({
            task:taskDTO(updatedTask),
            message:"Task status updated successfully"
        })
    } catch (error) {
        next(error);
    }
}

module.exports={
    createNewTask,
    getAllTasks,
    deleteTask,
    updateTaskStatus
}
    