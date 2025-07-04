import React from "react";
import ReactDOM from "react-dom/client";

export function TechList() {
  const technologies = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Technologies</h2>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}


