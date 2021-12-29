import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer className="container">
        This project was coded by Shayna Stewart and is {" "}
        <a href="https://github.com/5h8YN8/react-weather-app-2">open sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
