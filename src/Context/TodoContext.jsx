import { createContext, useContext, useState, useEffect } from "react";
import { colRef,db } from "../firebase/config";
import { addDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "./Auth-Context";
import { async } from "@firebase/util";
const defaultValue = [];

const todoContext = createContext(defaultValue);

const TodoProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const { user } = useAuth();

  const changeHandler = (e) => {
    {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(colRef, {
        todo: input,
        isComplete: false,
        email:user.email,
      });
    }
    setInput("");
  };

  useEffect(() => {
    // (async()=>{
    //     const q=query(colRef, where("uid", "==", authToken));
    //     const querySnapShot=await getDocs(q)
    //     let todosArray=[]
    //     querySnapShot.forEach((doc)=>{
    //         todosArray.push({...doc.data(),id:doc.id})
    //     })
    //     setTodos(todosArray)
    // })();

    // async function unSub() {
    //   const q = query(colRef, where("uid", "==", authToken));
    //   onSnapshot(q, (QuerySnapshot) => {
    //     let todosArray = [];
    //     QuerySnapshot.forEach((doc) => {
    //       todosArray.push({ ...doc.data(), id: doc.id });
    //     });
    //     setTodos(todosArray);
    //   });
    // }
    // return () => unSub();

    try {
        if(user){
            onSnapshot(query(colRef, where("email", "==", user.email)),(querySnapshot) => {
                let todosArray=[]
                querySnapshot.docs.map((doc) => {
                todosArray.push({...doc.data(),id:doc.id})
              })
              setTodos(todosArray)
          });
        }
    } catch (error) {
        console.log("error in initial ",error)
    }
  }, [user]);

//   console.log(todos);

  return (
    <>
      <todoContext.Provider
        value={{ todos, input, changeHandler, handleSubmit }}
      >
        {children}
      </todoContext.Provider>
    </>
  );
};

const useTodos = () => useContext(todoContext);
export { useTodos, TodoProvider };
