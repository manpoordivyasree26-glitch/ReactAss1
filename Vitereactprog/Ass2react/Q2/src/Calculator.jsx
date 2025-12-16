import {useState} from "react";
function Calculator(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const[operation,setOperation]=useState("Add");
    const[results,setResults]=useState([])

    const handleCalculate=()=>{
     let a=Number(num1);
     let b=Number(num2);
     let result=0;

     if(operation==="Add"){
        result=a+b;
     }else if(operation==="Subtract"){
        result=a-b;
     }else if(operation==="Multiply"){
        result=a*b;
     }
    setResults([...results,result]);
    };
    return(
        <div>
 <input
 type="number"
 placeholder="Number1"
 value={num1}
 onChange={(e)=> setNum1(e.target.value)}/>
 <input 
 type="number"
 placeholder="Number2"
 value={num2}
 onChange={(e)=>setNum2(e.target.value)}
 />
 <select value={operation}
 onChange={(e)=>setOperation(e.target.value)}

 >
    <option>Add</option>
    <option>Subtract</option>
    <option>Multiply</option>
 </select>
 <button onClick={handleCalculate}>
    Perform Action
 </button>
 <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>

        </div>

    );

}
export default Calculator;