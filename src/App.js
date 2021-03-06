import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from './Component/Hello';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      </header>
    </div>
  );
}
function  Counter() {
  const[count,setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
  return(
    <div>
          <h1>count:{count}</h1>
          <button onClick = {handleIncrease}>Increase</button>
          <button onClick = {handleDecrease}>Decrease</button>
    </div>
  )
}
  export default App;
