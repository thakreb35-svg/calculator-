import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleClick = (value) => {
    if (isResult) {
      setInput(value);     // clear old result automatically
      setIsResult(false);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setIsResult(false);
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setIsResult(true);   // mark as result state
    } catch {
      setInput("Error");
      setIsResult(true);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />

        <div className="buttons">
          <button onClick={clearInput} className="btn special">AC</button>
          <button onClick={deleteLast} className="btn special">DEL</button>
          <button onClick={() => handleClick("%")} className="btn special">%</button>
          <button onClick={() => handleClick("/")} className="btn operator">÷</button>

          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("*")} className="btn operator">×</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("-")} className="btn operator">−</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("+")} className="btn operator">+</button>

          <button onClick={() => handleClick("0")} className="btn zero">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={calculateResult} className="btn equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
