import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!newTask.title.trim()) return;
    await axios.post(API_URL, newTask);
    setNewTask({ title: "", description: "" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await axios.put(`${API_URL}/${task.id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const openEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTask((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    await axios.put(`${API_URL}/${editingTask.id}`, editingTask);
    setEditingTask(null);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          To-Do List
        </h1>

        {/* Create New Task */}
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
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-50 border p-4 rounded-lg flex justify-between items-start"
            >
              <div className="flex-1">
                <h3
                  className={`font-semibold text-lg ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
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
                  onClick={() => toggleComplete(task)}
                  className="text-green-500 hover:text-green-600"
                  title="Toggle Complete"
                >
                  ✔
                </button>
                <button
                  onClick={() => openEdit(task)}
                  className="text-yellow-500 hover:text-yellow-600"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600"
                  title="Delete"
                >
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Edit Modal */}
        {editingTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
              <input
                type="text"
                name="title"
                value={editingTask.title}
                onChange={handleEditChange}
                className="border p-2 w-full mb-2 rounded-md"
              />
              <textarea
                name="description"
                value={editingTask.description}
                onChange={handleEditChange}
                className="border p-2 w-full mb-2 rounded-md"
                rows="3"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditingTask(null)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
