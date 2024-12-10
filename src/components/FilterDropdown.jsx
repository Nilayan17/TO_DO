import React from "react";

const FilterDropdown = ({ currentFilter, setFilter }) => {
  return (
    <div className="filter-dropdown">
      <button onClick={() => setFilter("all")} className={currentFilter === "all" ? "active" : ""}>All</button>
      <button onClick={() => setFilter("completed")} className={currentFilter === "completed" ? "active" : ""}>Completed</button>
      <button onClick={() => setFilter("pending")} className={currentFilter === "pending" ? "active" : ""}>Pending</button>
    </div>
  );
};

export default FilterDropdown;
