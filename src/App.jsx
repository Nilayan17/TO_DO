import React, { useState } from "react";
import TodoList from "./components/TodoList";
import FilterDropdown from "./components/FilterDropdown";
import SearchBar from "./components/SearchBar";
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { name: newTask, completed: false }
      ]);
      setNewTask("");
    } else {
      alert("Nothing to do? Really?");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (index) => {
    const updatedTaskName = prompt("Edit your task", tasks[index].name);
    if (updatedTaskName) {
      setTasks(tasks.map((task, i) => 
        i === index ? { ...task, name: updatedTaskName } : task
      ));
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <FilterDropdown currentFilter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleComplete={toggleComplete}
        filter={filter}
      />
    </div>
  );
};

export default App;
