import './App.css';
import { useState } from "react";
import Keypad from "./Keypad";

function App() {
  let [input, setInput] = useState("");
  let [principal, setPrincipal]=useState('');
  let [rate, setRate]=useState('');
  let [time, setTime]=useState('');
  let [interest, setInterest]=useState(null);
  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    let outputVal = eval(input);
    setInput(outputVal);
  }
  function handleClear() {
    setInput("");
  }
  function calculateInterest(value){
    let calculateInterest=(principal * rate * time)/100;
    setInterest(calculateInterest);
  }
  return (
    <div className="container">
      <h1>Calculator App using react</h1>
      <div>
        <input type="text" value={input} 
            className="output" readOnly />
        <Keypad
          handleClick={handleClick} 
          handleClear={handleClear}
          calculate={calculate}
        />
      </div><br></br><br></br>
      <h2>Interest Calculator</h2>
      <div>
          <label>Principal:</label>
          <input type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)} placeholder='Enter Principal'/>
      </div>
      <div>
          <label>Rate:</label>
          <input type="number" value={rate} onChange={(e)=>setRate(e.target.value)} placeholder='Enter Rate'/>
      </div>
      <div>
          <label>Time:</label>
          <input type="number" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='Enter Time'/>
      </div>
    </div>
    
  );
}

export default App;