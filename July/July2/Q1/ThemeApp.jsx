import React, { useState } from "react";

const ThemedBox = ({ theme, children }) => {
  const styles = {
    light: {
      backgroundColor: "#f5f5f5",
      color: "#222",
      border: "1px solid #ccc",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f5f5f5",
      border: "1px solid #555",
    },
  };

  return (
    <div
      style={{
        ...styles[theme],
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
};

const ThemeApp = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <ThemedBox theme={theme}>Box 1: This is a themed box</ThemedBox>
      <ThemedBox theme={theme}>Box 2: Styling changes with theme</ThemedBox>
      <ThemedBox theme={theme}>Box 3: Reusable with props</ThemedBox>
    </div>
  );
};

export default ThemeApp;
