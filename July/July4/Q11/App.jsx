import React, { useState } from "react";
import MainContainer from "./components/MainContainer";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MainContainer name={name} />
    </div>
  );
}

export default App;
