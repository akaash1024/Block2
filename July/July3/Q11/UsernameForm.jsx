import React, { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (username.trim() === "") {
      setError("Username is required.");
    } else {
      setError("");
      alert(`Submitted username: ${username}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Username Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "10px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default UsernameForm;
