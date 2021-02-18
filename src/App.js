import React, { useState } from "react";
import Display from "./components/Display/Display";
import Controls from "./components/Controls/Controls";
import "./App.css";
import {evaluate} from 'mathjs';

export default function App() {
  const [firstArg, setFirstArg] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [enableOperations, setEnableOperations] = useState(false);
  const [enableCompute, setEnableCompute] = useState(false);

  const controlClickHandler = e => {
    const value = e.target.innerHTML;
    if (value.length < 16 && displayValue.length < 16) {
      switch (value) {
        case "+":
        case "-":
        case "*":
        case "/": {
          if (!enableOperations)
            return;
          checkForFirstArg(value);
          setEnableOperations(false);
          setEnableCompute(false);
          break;
        }
        case '.': {
          if(displayValue.indexOf('.') !== -1)
            return;
          setDisplayValue(displayValue === '' ? '0.' : displayValue + '.');
          //setEnableCompute(true);
          break;
        }
        case "=": {
          if (!enableCompute)
            return;
          setFirstArg(firstArg + displayValue + value);
          let num =  evaluate(firstArg + displayValue);
          let result = Math.round( num * 100 + Number.EPSILON ) / 100;
          setDisplayValue(result.toString());
          setEnableCompute(false);
          break;
        }
        case 'DEL': {
          let newDisplayValue = displayValue.slice(0, -1);
          if(newDisplayValue.length === 0) {
            setFirstArg('');
            setEnableOperations(false);
            setEnableCompute(false);
          }
          setDisplayValue(newDisplayValue);
          break;
        }
        case 'C': {
          setDisplayValue('');
          setFirstArg('');
          setEnableOperations(false);
          setEnableCompute(false);
          break;
        }
        default:
          setDisplayValue(!enableCompute ? value : displayValue + value);
          setEnableOperations(true);
          setEnableCompute(true);
      }
    }
  };

  const checkForFirstArg = (value) => {
    if(firstArg.indexOf('=') !== -1) {
      setFirstArg(displayValue + value);
      return;
    }
    let newVal = firstArg + displayValue + value;
    setFirstArg(newVal);
    let lastChar = newVal.charAt(newVal.length - 1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      let newExp = newVal.slice(0, -1);
      let num =  evaluate(newExp);
      let result = Math.round( num * 100 + Number.EPSILON ) / 100;
      setDisplayValue(result.toString());
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <Display firstArg={firstArg}>{displayValue}</Display>
        <Controls controlClickHandler={controlClickHandler} enableOperations={enableOperations} enableCompute={enableCompute}/>
      </div>
    </div>
  );
}
