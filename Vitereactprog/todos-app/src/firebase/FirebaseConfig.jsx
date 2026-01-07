import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7EX85dJKHnb6iB08awasPzcwlS02URKo",
  authDomain: "todos-app-11ec8.firebaseapp.com",
  databaseURL: "https://todos-app-11ec8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todos-app-11ec8",
  storageBucket: "todos-app-11ec8.firebasestorage.app",
  messagingSenderId: "991157433518",
  appId: "1:991157433518:web:35cfc06f27cfbc1de0693f",
  measurementId: "G-6NWXP1E6CR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);