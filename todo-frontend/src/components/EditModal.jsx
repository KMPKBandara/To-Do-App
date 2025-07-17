import React from "react";

function EditModal({ task, onClose, onChange, onSave }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded-md"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded-md"
          rows="3"
        ></textarea>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
