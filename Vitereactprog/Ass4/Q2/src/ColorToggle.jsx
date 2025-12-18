import {useState} from "react";

function ColorToggle(){
const[isRed,setIsRed]=useState(true);
return(
<div>
<div
style={{
    backgroundColor:isRed ? "red":"blue",
    color:"White",
    padding:"20px",
    marginBottom:"10px"
}}
>
    This Div Changes color
</div>
    <button onClick={()=>setIsRed(!isRed)}>ChangeColor</button>
</div>
);
}
export default ColorToggle;