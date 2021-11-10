import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const getNumber = (inputNumber) => {
    if (!number) {
      setNumber(inputNumber);
    } else {
      setNumber(Number(`${number}${inputNumber}`));
    }
  };

  const calculations = () => {
    if (operation !== null && result !== 0) {
      if (operation === "+") {
        setResult(result + number);
      } else if (operation === "-") {
        setResult(result - number);
      } else if (operation === "*") {
        setResult(result * number);
      } else if (operation === "/") {
        if (number !== 0) {
          setResult(result / number);
        } else {
          setResult("Error");
        }
      }
    } else {
      setResult(number);
    }
    setNumber(0);
  };

  const handleOperation = (operationType) => {
    switch (operationType) {
      case "+":
        calculations();
        setOperation("+");
        break;
      case "-":
        calculations();
        setOperation("-");
        break;
      case "/":
        calculations();
        setOperation("/");

        break;
      case "*":
        calculations();
        setOperation("*");
        break;
      default:
        return;
    }
  };

  const getResult = () => {
    calculations();
    setOperation("");
  };

  const reset = () => {
    setOperation("");
    setResult(0);
    setNumber(0);
  };

  const deleteNumber = () => {
    if (number === 0 || number === "") {
      setNumber(0);
    } else {
      setNumber(number.toString().slice(0, -1));
    }
  };

  const setDecimal = () => {
    if (!number.toString().includes(".")) {
      setNumber(number.toString() + ".");
    }
  };

  const thousandsSeparators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-container">
          <p className="input-text">
            {number ? thousandsSeparators(number) : thousandsSeparators(result)}
          </p>
        </div>
        <div className="buttons-container">
          <button onClick={() => getNumber(7)}>7</button>
          <button onClick={() => getNumber(8)}>8</button>
          <button onClick={() => getNumber(9)}>9</button>
          <button className="delete" onClick={deleteNumber}>
            <i class="fas fa-backspace"></i>
          </button>
          <button onClick={() => getNumber(4)}>4</button>
          <button onClick={() => getNumber(5)}>5</button>
          <button onClick={() => getNumber(6)}>6</button>
          <button className="operator" onClick={() => handleOperation("+")}>
            +
          </button>
          <button onClick={() => getNumber(1)}>1</button>
          <button onClick={() => getNumber(2)}>2</button>
          <button onClick={() => getNumber(3)}>3</button>
          <button className="operator" onClick={() => handleOperation("-")}>
            -
          </button>
          <button onClick={setDecimal}>.</button>
          <button onClick={() => getNumber(0)}>0</button>
          <button onClick={() => handleOperation("/")}>÷</button>
          <button className="operator" onClick={() => handleOperation("*")}>
            ×
          </button>
          <button className="reset" onClick={reset}>
            RESET
          </button>
          <button className="result" onClick={getResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
