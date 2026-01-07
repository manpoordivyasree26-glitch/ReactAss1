import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="flex justify-between p-4 bg-gray-200">
      <h1 className="font-bold">Todos App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
