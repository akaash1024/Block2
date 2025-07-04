import React, { useState } from "react";

function BasicTodoList() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Basic Todo List</h2>

      <ul style={{ padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ listStyle: "none", margin: "5px 0" }}>
            {task}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        placeholder="Enter new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>
      <br />
      <button onClick={clearAll} style={{ marginTop: "10px", color: "red" }}>
        Clear All
      </button>
    </div>
  );
}

export default BasicTodoList;
