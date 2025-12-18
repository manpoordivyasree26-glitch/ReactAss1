import {useEffect,useState} from "react";

function Counter(){
const[count,setCount]=useState(0);
  
useEffect(()=>{
if(count!==0&& count%3===0){
    alert(`the current number ${count} is divisble by 3`)
}
},[count]);
return(
    <div>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
);

}
export default Counter;