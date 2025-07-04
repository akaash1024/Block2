import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const PRIORITY_ORDER = { High: 3, Medium: 2, Low: 1 };

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    };
    setTasks((prev) =>
      [...prev, newTask].sort(
        (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
      )
    );
    setTitle("");
    setPriority("Medium");
  };

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev
        .map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
        .sort(
          (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
        )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchPriority =
      filterPriority === "All" || task.priority === filterPriority;
    const matchStatus =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);
    return matchPriority && matchStatus;
  });

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Advanced Task Manager</h2>

      {/* Add Task Form */}
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      {/* Filters */}
      <div style={{ marginTop: "20px" }}>
        <label>Filter by Priority: </label>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label style={{ marginLeft: "15px" }}>Filter by Status: </label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <ul style={{ paddingLeft: "0", marginTop: "20px" }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              listStyle: "none",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              backgroundColor: task.priority === "High" ? "#ffe6e6" : "#f9f9f9",
              textDecoration: task.completed ? "line-through" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>[{task.priority}]</strong> {task.title}
            </div>
            <div>
              <button onClick={() => toggleCompletion(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
