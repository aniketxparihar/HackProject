import { createContext, useContext , useState,useEffect} from "react";
import { colRef } from "../firebase/config";
import { addDoc,onSnapshot, query } from "firebase/firestore";

const defaultValue=[]

const todoContext=createContext(defaultValue);

const TodoProvider=({children})=>{
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([])
    
    const changeHandler=(e)=>{{
        setInput(e.target.value)
    }}

    const handleSubmit=(e)=>{
        e.preventDefault();
        addDoc(colRef,{
            todo:input,
            isComplete:false
        })
        setInput("")
    }

    useEffect(() => {
        const q=query(colRef);
        const unSub=onSnapshot(q,(QuerySnapshot)=>{
          let todosArray=[]
          QuerySnapshot.forEach((doc)=>{
            todosArray.push({...doc.data(),id:doc.id})
          })
          setTodos(todosArray)
        })
        return ()=>unSub();
      }, []);

    return(
        <>
        <todoContext.Provider value={{todos,input,changeHandler,handleSubmit}}>
            {children}
        </todoContext.Provider>
        </>
    )
}

const useTodos=()=>useContext(todoContext)
export {useTodos,TodoProvider}