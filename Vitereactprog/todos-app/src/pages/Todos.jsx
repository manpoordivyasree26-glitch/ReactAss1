import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as todoService from "../services/TodoService";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import UpdateTodoModal from "../components/UpdateTodoModal";
import { Button } from "@/components/ui/button";

export default function Todos() {
  const { user } = useAuth();

  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  // 🔄 Load todos on page load
  useEffect(() => {
    if (!user) return;

    const loadTodos = async () => {
      const data = await todoService.getTodos(user.uid);
      setTodos(data);
      setSelected(data[0] || null);
    };

    loadTodos();
  }, [user]);

  // ➕ ADD TODO (Optimistic)
  const handleAddTodo = async () => {
    const tempId = Date.now().toString();

    const tempTodo = {
      id: tempId,
      title: "New Todo",
      completed: false,
      userId: user.uid,
    };

    setTodos((prev) => [...prev, tempTodo]);
    setSelected(tempTodo);

    try {
      const docRef = await todoService.createTodo({
        title: tempTodo.title,
        completed: false,
        userId: user.uid,
      });

      setTodos((prev) =>
        prev.map((t) =>
          t.id === tempId ? { ...t, id: docRef.id } : t
        )
      );
      setSelected((prev) =>
        prev?.id === tempId ? { ...prev, id: docRef.id } : prev
      );
    } catch {
      setTodos((prev) => prev.filter((t) => t.id !== tempId));
    }
  };

  // 🔄 TOGGLE STATUS (Optimistic)
  const handleToggle = async () => {
    if (!selected) return;

    const updated = !selected.completed;

    setTodos((prev) =>
      prev.map((t) =>
        t.id === selected.id ? { ...t, completed: updated } : t
      )
    );
    setSelected({ ...selected, completed: updated });

    try {
      await todoService.updateTodo(selected.id, {
        completed: updated,
      });
    } catch {
      alert("Toggle failed");
    }
  };

  // ❌ DELETE TODO (Optimistic)
  const handleDelete = async () => {
    if (!selected) return;

    const id = selected.id;

    setTodos((prev) => prev.filter((t) => t.id !== id));
    setSelected(null);

    try {
      await todoService.deleteTodo(id);
    } catch {
      alert("Delete failed");
    }
  };

  // ✏️ SAVE EDIT (Optimistic + FIXED)
  const handleSave = async () => {
    if (!editingTodoId || !title.trim()) return;

    setTodos((prev) =>
      prev.map((t) =>
        t.id === editingTodoId ? { ...t, title } : t
      )
    );
    setSelected((prev) =>
      prev?.id === editingTodoId ? { ...prev, title } : prev
    );

    setOpen(false);
    setEditingTodoId(null);

    try {
      await todoService.updateTodo(editingTodoId, { title });
    } catch {
      alert("Save failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar
          todos={todos}
          selectedTodoId={selected?.id}
          onSelectTodo={setSelected}
        />

        <div className="p-6 flex-1">
          {selected ? (
            <>
              <h2 className="text-xl font-bold">{selected.title}</h2>
              <p>{selected.completed ? "Completed" : "Pending"}</p>

              <div className="flex gap-2 mt-4">
                <Button onClick={handleToggle}>Toggle</Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingTodoId(selected.id);
                    setTitle(selected.title);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>

                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </>
          ) : (
            <p>No todo selected</p>
          )}

          <Button className="mt-6" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </div>
      </div>

      <Footer />

      <UpdateTodoModal
        open={open}
        value={title}
        onChange={setTitle}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
