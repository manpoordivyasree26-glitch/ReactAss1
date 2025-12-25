import{useState,useEffect} from "react";
import{useNavigate,Link} from "react-router-dom"
function Todos(){
    const[Todos,setTodos]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((data)=>setTodos(data.slice(0,10)));
    },[]);
    const Logout=()=>{
        localStorage.removeItem(isLoggedIn);
        navigate("./login");
    };
    return(
        <div style={{padding:"20px"}}>
            <h2>Todos</h2>
            <button onClick={Logout}>Logout</button>

            <ul>
                {Todos.map((todo)=>(
                  <li key={todo.id}>
                    <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                  </li>
                ))}
            
            </ul>
        </div>
    );

}
export default Todos;