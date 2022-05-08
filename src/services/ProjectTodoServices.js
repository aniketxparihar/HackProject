import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const handleTaskDelete = async (projectId,id) => {
  await deleteDoc(doc(db, "projects",projectId,"project-tasks", id));
};
const handleTaskComplete = async (projectId,todo) => {
  await updateDoc(doc(db, "projects",projectId,"project-tasks", todo.id), {
    isComplete: !todo.isComplete,
  });
};

export {handleTaskComplete,handleTaskDelete}