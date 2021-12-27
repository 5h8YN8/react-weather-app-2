import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="#">Shayna Stewart</a>
        {" "}and is {" "}
        <a href="#">open sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
