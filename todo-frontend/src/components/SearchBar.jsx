import React from "react";
import { Search } from "lucide-react";

function SearchBar({ keyword, setKeyword, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tasks..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full py-3 pl-12 pr-20 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search size={18} />
        </div>
        <button
          onClick={onSearch}
          className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
