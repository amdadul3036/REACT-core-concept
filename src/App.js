import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var identity = {
    name: "Dr. Mahfuj",
    profession: "Singer",
    Title: "He is the Best singer of the world"
  };
  const name = "Mahfuz";
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We will edit this <code>src/App.js</code> and save to reload.Our main
          work is in this folder.
        </p>
        <h2>{3+5}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>DHRUBOISH</h1>
  <h1>name: {name}</h1>
  <p>Identity: {identity.name} {","} {identity.profession} {","} {identity.Title}</p>
  <p>Identity: {identity.name , identity.Title , identity.profession}</p>  //Ei vabe dile last er ta print hobe sudhu
        <p>My first React APP </p>
      </header>
    </div>
  );
}

export default App;
