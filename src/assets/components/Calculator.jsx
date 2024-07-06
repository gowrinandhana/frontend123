import { useState } from "react";
import NavBar from "./navbar";
import axios from 'axios';

function Calculator() {
  const [n1, setNum1] = useState(null);
  const [n2, setNum2] = useState(null);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);
  const [expression, setExpression] = useState("");

  function calculate(input) {
    if (n1 === null) {
      setNum1(input);
      setExpression(`${input}`);
    } else if (n2 === null) {
      setNum2(input);
      setExpression(`${expression} ${input}`);
    }
  }

  function clear() {
    setNum1(null);
    setNum2(null);
    setOperator("");
    setResult(null);
    setExpression("");
  }

  function chooseOperator(operand) {
    if (n1 !== null) {
      setOperator(operand);
      let opSymbol = operand === "add" ? "+" : operand === "sub" ? "-" : operand === "mul" ? "*" : operand === "div" ? "/" : "";
      setExpression(`${expression} ${opSymbol}`);
    }
  }

  
  async function handleResult()  {
    const response = await axios.post('https://batch2-3g7f.onrender.com/calculate', {n1,n2, operator});
    setResult(response.data)
    console.log(response.data);

    setExpression(response.data)
    setNum1(response.data);
       setNum2(response.data);
}



  return (
    <>
    <NavBar/>
    <div style={{containerStyle,backgroundColor:'black',marginLeft:'420px',marginRight:'420px'}}>
      <h1 style={{headerStyle,color:'white',alignItems:'center',marginLeft:'90px'}} >Calculator</h1>
      <div style={resultStyle}>
        {expression}
      </div>
      <div style={rowStyle}>
        {[7, 8, 9].map((num) => (
          <button key={num} style={buttonStyle} onClick={() => calculate(num)}>
            {num}
          </button>
        ))}
      </div>
      <div style={rowStyle}>
        {[4, 5, 6].map((num) => (
          <button key={num} style={buttonStyle} onClick={() => calculate(num)}>
            {num}
          </button>
        ))}
      </div>
      <div style={rowStyle}>
        {[1, 2, 3].map((num) => (
          <button key={num} style={buttonStyle} onClick={() => calculate(num)}>
            {num}
          </button>
        ))}
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => calculate(0)}>0</button>
      </div>
      
      <div style={rowStyle}>
        {[
        { label: "+", operator: "add" },
        { label: "-", operator: "sub" },
        { label: "*", operator: "mul" },
        { label: "/", operator: "div" }
        ].map(({ label, operator }) => (
          <button key={operator} style={buttonStyle} onClick={() => chooseOperator(operator)}>
            {label}
          </button>
        ))}
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={clear}>
          AC
        </button>
        <button style={buttonStyle} onClick={handleResult}>
          =
        </button>
      </div>
    </div>
    
    </>
  );
}


const containerStyle = {
  display: "flex",
  justifyContent: "center",
      alignItems: "center",
  flexDirection: "column",
  color: "black",
  backgroundColor: "white",
  width: "200px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
};

const headerStyle = {
  marginBottom: "20px"
};

const rowStyle = {
  display: "flex",
 
 justifyContent: "center",
  alignItems: "center",
     gap: "10px",
  marginBottom: "10px"
};

const buttonStyle = {
  padding: "10px",
     background: "lightgray",
  border: "1px solid black",
  borderRadius: "5px",
  color: "black",
fontWeight: "bold",
  width: "40px",
  height: "40px",
  textAlign: "center"
};

const resultStyle = {
  marginBottom: "20px",
fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "rgb(211, 211, 211)",
  padding: "10px",borderRadius: "5px",

  width: "250px",
  marginLeft:'30px',
  marginRight:'30px',
     textAlign: "center",
  height: "40px",
  display: "flex",
     alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  

};

export default Calculator;
