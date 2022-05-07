import { db } from "../firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const handleDelete= async (id)=>{
    await deleteDoc(doc(db,"todos",id))
  }
const handleComplete=async(todo)=>{
    await updateDoc(doc(db,"todos",todo.id),{
      isComplete:!todo.isComplete
    })
}

export {handleDelete,handleComplete}