import React from "react";

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
