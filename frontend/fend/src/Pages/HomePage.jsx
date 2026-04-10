import { useEffect, useState } from "react";
import { axiosInstance } from "../axios";
import { TaskComponent } from "../Components/TaskComponent";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

  const getTasks = async () => {
    try {
      const res = await axiosInstance.get("/allTasks");

      const data = Array.isArray(res.data) ? res.data : [];

      const formattedTasks = data.map((task) => ({
        id: task.id,
        title: task.title,
        completed: task.complete_status,
        created_at: task.created_at,
      }));

      setTasks(formattedTasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    try {
      await axiosInstance.patch(`/update/${id}`, {
        completed: !currentStatus,
      });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      await axiosInstance.post("/createTask", { title });
      setTitle("");
      setShowForm(false);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <div className="mx-auto text-center">
             <h1>All tasks visible here </h1>
        </div>
     

      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={{
            ...task,
            complete_status: task.completed,
          }}
          onToggle={toggleStatus}
          onDelete={deleteTask}
        />
      ))}

      <button className="mx-auto text-center border border-black rounded-full px-4 py-2"onClick={() => setShowForm(!showForm)}>
        Add Task
      </button>

      {showForm && (
        <form onSubmit={createTask} style={{ marginTop: "10px" }}>
          <input
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="border border-black rounded-full px-4 py-2" type="submit">Create</button>
        </form>
      )}
    </div>
  );
}