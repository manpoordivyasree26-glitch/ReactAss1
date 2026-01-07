import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const todosRef = collection(db, "todos");

export const createTodo = async (todo) => {
  return addDoc(todosRef, todo);
};

export const getTodos = async (userId) => {
  const q = query(todosRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const updateTodo = async (id, data) => {
  const todoRef = doc(db, "todos", id);
  return updateDoc(todoRef, data);
};

export const deleteTodo = async (id) => {
  const todoRef = doc(db, "todos", id);
  return deleteDoc(todoRef);
};

export const toggleTodo = async (id, completed) => {
  const todoRef = doc(db, "todos", id);
  return updateDoc(todoRef, { completed });
};
