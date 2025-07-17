import React from "react";

function SearchBar({ keyword, setKeyword, onSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={onSearch}
        className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
