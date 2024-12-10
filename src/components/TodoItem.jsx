import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = ({ task, onDelete, onEdit, onToggleComplete, isCompleted }) => {
  return (
    <div className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <input type="checkbox" checked={isCompleted} onChange={onToggleComplete} />
      <span>{task}</span>
      <button onClick={onEdit}>
        <FaEdit />
      </button>
      <button onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
