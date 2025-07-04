import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export function DOMComparisonApp() {
  const [reactTitle, setReactTitle] = useState("React Title");
  const [reactUpdates, setReactUpdates] = useState(0);

  let vanillaUpdates = 0;

  const handleVanillaClick = () => {
    const el = document.getElementById("vanilla-title");
    if (el) {
      el.textContent = "Vanilla Title " + (vanillaUpdates + 1);
      vanillaUpdates++;
      document.getElementById("vanilla-count").textContent =
        "DOM Updates (Vanilla JS): " + vanillaUpdates;
    }
  };

  const handleReactClick = () => {
    setReactTitle((prev) => "React Title " + (reactUpdates + 1));
    setReactUpdates((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React vs Vanilla DOM Update Demo</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3 id="vanilla-title">Vanilla Title</h3>
        <p id="vanilla-count">DOM Updates (Vanilla JS): 0</p>
        <button onClick={handleVanillaClick}>Change Title (Vanilla JS)</button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>{reactTitle}</h3>
        <p>DOM Updates (React): {reactUpdates}</p>
        <button onClick={handleReactClick}>Change Title (React)</button>
      </div>
    </div>
  );
}
