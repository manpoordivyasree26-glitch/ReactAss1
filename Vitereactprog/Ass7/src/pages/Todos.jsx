import {useEffect,useState} from "react";
import TodoCard from "../components/TodoCard";

function Todos(){
const[todos, setTodos]=useState([]);

useEffect(()=>{
    fetch ("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>setTodos(data.slice(0,10)));
 },[]);
return(
    <div>
        <h2>Todos</h2>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
            gap:"15px"
        }}>
            {todos.map(todo=>(
                <TodoCard key={todo.id} todo={todo}/>
            ))}

        </div>

    </div>
)

}
export default Todos;