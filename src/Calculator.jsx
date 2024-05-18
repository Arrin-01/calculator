import { useState, useEffect } from 'react';

export default function Calculator(){ 

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("");
  const [command, setCommand] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => { },[input1, input2, operator, result]);

  function InputValue(text){
    if(input1 === "" || operator === ""){
      setInput1((prevText) => prevText + text);
    } else {
      setInput2((prevText) => prevText + text);
    }
  };

  function InputOperator(text){
    setOperator(text);
  }

  function InputCommand(text){
    setCommand(text);
  }

  function Calculate(){
    let val1 = null;
    let val2 = null;
    val1 = Number(input1);
    val2 = Number(input2);
    let finalValue = null;
    if(operator === "+"){
      setCommand("Equals");
      finalValue = val1 + val2;
      setResult(finalValue);
      Clear();
    }
    if(operator === "-"){
      setCommand("Equals");
      finalValue = val1 - val2;
      setResult(finalValue);
      Clear();
    }
    if(operator === "x"){
      setCommand("Equals");
      finalValue = val1 * val2;
      setResult(finalValue);
      Clear();
    }
    if(operator === "÷"){
      if(val1 === 0 || val2 === 0){
        setCommand("Equals");
        setResult(0);
        Clear();
      } else {
        setCommand("Equals");
        finalValue = val1 / val2;;
        setResult(finalValue);
        Clear();
      }
    }
    if(operator === "^"){
      setCommand("Equals");
      finalValue = val1 ** val2;
      setResult(finalValue);
      Clear();
    }

    if(operator === "√"){
      setCommand("Equals");
      finalValue = Math.sqrt(val1);
      setResult(finalValue);
      Clear();
    }

  }
  function Clear(){
    setInput1("");
    setInput2("");
    setOperator("");
  }

  function AllClear(){
    Clear();
    setCommand("")
    setResult("");
  }

  const group = `${input1} ${operator} ${input2}`;

  return(
    <div className="calculator">
      <div className="brand">CALCULATOR</div>
      <div className="screen-box">
        <div className="sub-box">
          <input value={command} onChange={InputCommand}className="ops-screen"/>
          <input value={`${input1} ${operator} ${input2}`} className="sub-screen"/>
        </div>
        <input value={result} onChange={Calculate}className="main-screen"/>
      </div>
      <div className="buttons">
        <button className="operators" onClick={() => {InputOperator("+"); InputCommand("Plus")}}>+</button>
        <button className="operators" onClick={() => {InputOperator("-"); InputCommand("Minus")}}>-</button>
        <button className="operators" onClick={() => {InputOperator("x"); InputCommand("Multiply to")}}>x</button>
        <button className="operators" onClick={() => {InputOperator("÷"); InputCommand("Divided by")}}>÷</button>
        <button className="digits" onClick={() => InputValue("1")}>1</button>
        <button className="digits" onClick={() => InputValue("2")}>2</button>
        <button className="digits" onClick={() => InputValue("3")}>3</button>
        <button className="operators" onClick={() => {InputOperator("^"); InputCommand("Power Of")}}>^</button>
        <button className="digits" onClick={() => InputValue("4")}>4</button>
        <button className="digits" onClick={() => InputValue("5")}>5</button>
        <button className="digits" onClick={() => InputValue("6")}>6</button>
        <button className="operators" onClick={() => {InputOperator("√"); InputCommand("Square root")}}>&#8730;</button>
        <button className="digits" onClick={() => InputValue("7")}>7</button>
        <button className="digits" onClick={() => InputValue("8")}>8</button>
        <button className="digits" onClick={() => InputValue("9")}>9</button>
        <button className="operators" onClick={Calculate}>=</button>
        <button className="decimal" onClick={() => InputValue(".")}>.</button>
        <button className="digits" onClick={() => InputValue("0")}>0</button>
        <button className="clear" onClick={AllClear}>C</button>
      </div>
    </div>
  )
}