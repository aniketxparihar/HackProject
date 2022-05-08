import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const handleDelete = async (id) => {
  await deleteDoc(doc(db, "todos", id));
};
const handleComplete = async (todo) => {
  await updateDoc(doc(db, "todos", todo.id), {
    isComplete: !todo.isComplete,
  });
};

const handleClearAll = (todos) => {
  todos.forEach(todo => {
    deleteDoc(doc(db,"todos",todo.id))
  });
};

export { handleDelete, handleComplete, handleClearAll };
