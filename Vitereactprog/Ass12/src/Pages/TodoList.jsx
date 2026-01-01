import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";
import { useEffect,useState } from "react";

function TodoList(){
const[todos,setTodos]=useState([]);

useEffect(()=>{
    getTodos().then((res)=>{
       setTodos(res.data.slice(0,20));
    })
},[]);
return(
    <div>
        <h2>Todo List</h2>
        {todos.map((todo)=>(
            <div key={todo.id} style={{marginBottom:"10px"}}>
                <Link to={`/todo/${todo.id}`}>
                <strong>{todo.title}</strong>
                </Link>
        <p>Status:{todo.completed ? "Completed":"Not Completed"}</p>
            </div>
        ))}
        </div>
);
}
export default TodoList;