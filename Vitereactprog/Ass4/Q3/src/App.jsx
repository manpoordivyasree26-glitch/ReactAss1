import {useState} from "react";
import TodoList from "./TodoList";
function App(){
const [showTodos,setShowTodos] = useState(true);

return(
<div>
<button onClick={()=>setShowTodos(false)}>Unmount Todos</button>
{showTodos && <TodoList/>}

</div>
);
}
export default App;