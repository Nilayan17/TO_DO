import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDelete, onEdit, onToggleComplete, filter }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // all tasks
  });

  return (
    <div>
      {filteredTasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task.name}
          isCompleted={task.completed}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
          onToggleComplete={() => onToggleComplete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
