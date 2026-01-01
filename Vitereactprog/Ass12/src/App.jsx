import TodoList from "./Pages/TodoList";
import TodoDetails from "./Pages/TodoDetails";
import {  Route, Routes } from "react-router-dom";
function App(){
return(
    <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todo/:id" element={<TodoDetails/>}/>
    </Routes>
    

);
}
export default App;