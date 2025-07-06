import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemedBox() {
  const { theme } = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#555",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={boxStyle}>
      <p>This box adapts to the {theme} theme!</p>
    </div>
  );
}

export default ThemedBox;
