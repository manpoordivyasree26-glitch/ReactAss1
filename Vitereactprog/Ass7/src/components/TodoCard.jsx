function TodoCard({todo}){
return(
<div style={{
    padding:"15px",
    borderRadius:"8px",
    background:"#f9f9f9",
    border:"1px solid #ccc"
}}>
    <h4>{todo.title}</h4>
    <p>
        Status:{" "}
        <strong style={{color:todo.completed ? "green":"red"}}>
            {todo.completed ? "Completed":"NotCompleted"}
        </strong>
    </p>
</div>
);
}
export default TodoCard;