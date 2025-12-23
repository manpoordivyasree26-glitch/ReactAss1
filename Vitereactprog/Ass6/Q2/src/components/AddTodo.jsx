import {useContext, useRef} from "react";
import TodoContext from "../context/TodoContext";

function AddTodo()
{
const {addTodo} =useContext(TodoContext);
const inputRef=useRef();

const handleAdd=()=>{
    addTodo(inputRef.current.value);
    inputRef.current.value="";
};
return(
<div>
    <input ref={inputRef} placeholder="EnterTodo"/>
    <button onClick={handleAdd}>Add</button>
</div>
)

}
export default AddTodo;
