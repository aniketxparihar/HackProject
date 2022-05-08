import { createContext, useContext , useState,useEffect} from "react";
import { colRef } from "../firebase/config";
import { addDoc,getDocs,onSnapshot, query } from "firebase/firestore";
import { useAuth } from "./Auth-Context";
const defaultValue=[]

const todoContext=createContext(defaultValue);

const TodoProvider=({children})=>{
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([])
    const {authToken}=useAuth();
    
    const changeHandler=(e)=>{{
        setInput(e.target.value)
    }}

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input){
            addDoc(colRef,{
                todo:input,
                isComplete:false,
                uid:authToken
            })
        }
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