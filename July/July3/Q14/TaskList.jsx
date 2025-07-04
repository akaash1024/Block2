import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios.get("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const data = response.data;
        if (data) {
          // Convert object to array with ID preserved
          const parsedTasks = Object.entries(data).map(([id, task]) => ({
            id,
            ...task
          }));
          setTasks(parsedTasks);
        } else {
          setTasks([]); // No tasks
        }
        setError(null); // Clear error if successful
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError("Failed to fetch tasks. Please try again.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
