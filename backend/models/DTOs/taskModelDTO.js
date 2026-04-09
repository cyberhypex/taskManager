//-> DTO file , we show only tile, completed or not and timestamps, no id
const taskDTO=(task)=>{
    return{
        title:task.title,
        complete_status:task.completed,
        created_at:task.createdAt
    }
}

module.exports=taskDTO;