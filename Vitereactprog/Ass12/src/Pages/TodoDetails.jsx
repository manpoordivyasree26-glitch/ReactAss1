import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import {getTodoById} from "../api/todoService";

function TodoDetails(){
const{id}=useParams();
const[todo,setTodo]=useState(null);

useEffect(()=>{
    getTodoById(id).then((res)=>{
 setTodo(res.data);
    })
},[id]);

if (!todo) return <p>Loading..</p>;
return(
    <div>
        <h2>Todo Details</h2>
        <p><strong>ID:</strong>{todo.id}</p>
        <p><strong>Title:</strong>{todo.title}</p>
        <p><strong>Status:</strong>{" "}
        {todo.completed? "Completed":"Not Completed"}
        </p>
        <Link to="/">Back to Todos</Link>
    </div>
)
}
export default TodoDetails;