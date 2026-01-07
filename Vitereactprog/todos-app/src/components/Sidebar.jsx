export default function Sidebar({ todos, selectedTodoId, onSelectTodo }) {
  return (
    <div className="w-64 border-r bg-gray-50 p-4">
      <h3 className="font-semibold mb-4">Todos</h3>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => onSelectTodo(todo)}
            className={`p-2 rounded cursor-pointer ${
              selectedTodoId === todo.id
                ? "bg-gray-300"
                : "hover:bg-gray-200"
            }`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
