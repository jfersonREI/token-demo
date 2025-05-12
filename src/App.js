import React from "react";
import "./App.css";
import ColorDisplay from "./components/ColorDisplay.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>USWDS Color Tokens Demo</h1>
        <ColorDisplay />
      </header>
    </div>
  );
}

export default App;
