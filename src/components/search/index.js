import React, { useState } from "react";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchText); // Pass search text to the parent
    }
    else if (event.ctrlKey && event.key === '/') {
      onSearch(searchText); // Pass search text to the parent
    }
  };


  return (
    <div className="search_wrapper">
      <input
        type="text"
        placeholder="Search places..."
        className="search_input"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBox;
