"use client"
import { useState } from "react";

function SearchBox({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city); //Call a function and passing it as props
      
    }
  };

  return (
    <div className="flex space-x-5">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter City ....."
        className="p-3 text-2xl text-gray-700 border-none focus:outline-none"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="text-3xl border-2 border-gray-600 p-3 cursor-pointer rounded-2xl text-gray-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
