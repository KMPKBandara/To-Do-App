import React from "react";

function TaskForm({ newTask, setNewTask, onAdd }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Task title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="border p-2 w-full mb-2 rounded-md"
      />
      <textarea
        placeholder="Description (optional)"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        className="border p-2 w-full rounded-md mb-2"
        rows="2"
      ></textarea>
      <button
        onClick={onAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;
