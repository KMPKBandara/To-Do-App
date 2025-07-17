import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import EditModal from "./components/EditModal";
import SearchBar from "./components/SearchBar";

const API_URL = "http://localhost:8080/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
  };

  const searchTasks = async () => {
    if (searchKeyword.trim() === "") {
      fetchTasks();
    } else {
      const res = await axios.get(`${API_URL}/search?keyword=${searchKeyword}`);
      setTasks(res.data);
    }
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

  const updateTask = async () => {
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

        <SearchBar
          keyword={searchKeyword}
          setKeyword={setSearchKeyword}
          onSearch={searchTasks}
        />

        <TaskForm newTask={newTask} setNewTask={setNewTask} onAdd={addTask} />

        <TaskList
          tasks={tasks}
          onToggle={toggleComplete}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />

        {editingTask && (
          <EditModal
            task={editingTask}
            onClose={() => setEditingTask(null)}
            onChange={setEditingTask}
            onSave={updateTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
