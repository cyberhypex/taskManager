export function TaskComponent({ task, onToggle, onDelete }) {
  return (
    <div className="bg-gray-400 border border-gray-300 shadow-md rounded-lg p-4 mb-4">
      
      <h3 className="text-xl font-semibold text-black">{task.title}</h3>

      <p className="mt-2 text-black">
        Status:{" "}
        <span className={task.complete_status ? "text-green-600 font-medium" : "text-red-500 font-medium"}>
          {task.complete_status ? "Completed" : "Pending"}
        </span>
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Created: {new Date(task.created_at).toLocaleString()}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => {
            onToggle(task.id, task.complete_status);
            alert("Status changed successfully");
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Change status
        </button>

        <button
          onClick={() => {
            onDelete(task.id);
            alert("Task deleted successfully");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>

    </div>
  );
}