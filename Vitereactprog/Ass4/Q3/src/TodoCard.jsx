import "./TodoCard.css";

function TodoCard({userId,title,completed}){
    return(
        <div className="todo-card">
      <p><strong>User ID:</strong>{userId}</p>
      <p className="todo-title">{title}</p>
      <p className={completed ? "completed":"not-completed"}>
         {completed ? "completed":"not-completed"}
      </p>
      </div>
    );
}
export default TodoCard;