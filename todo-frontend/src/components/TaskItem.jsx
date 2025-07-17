import React from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <li className="bg-gray-50 border p-4 rounded-lg flex justify-between items-start">
      <div className="flex-1">
        <h3
          className={`font-semibold text-lg ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>
        {task.description && (
          <p className="text-sm text-gray-500">{task.description}</p>
        )}
      </div>
      <div className="flex gap-2 items-center ml-4">
        <button
          onClick={() => onToggle(task)}
          className="text-green-500 hover:text-green-600"
          title="Toggle Complete"
        >
          ✔
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-yellow-500 hover:text-yellow-600"
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-600"
          title="Delete"
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
