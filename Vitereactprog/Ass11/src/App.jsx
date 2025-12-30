import {Suspense, lazy,useState} from "react";

const HeavyComponent=lazy(()=>import("./component/HeavyComponent"));

function App(){
const[count,setCount]=useState(0);
console.log("parent rendered")

return(
    <div style={{padding:"30px"}}>
       <h2>React.memo & Lazy Loading Demo</h2> 

       <h3>Counter:{count}</h3>
       <button onClick={()=>setCount(count+1)}>Increment Counter</button>
       <Suspense fallback={<p>Loading heavy Component</p>}>
        <HeavyComponent/>
       </Suspense>
    </div>
)
}
export default App;