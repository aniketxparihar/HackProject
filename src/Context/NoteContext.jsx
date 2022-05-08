import { createContext, useContext, useState, useEffect } from "react";
import {noteColRef,db} from "../firebase/config";
import { addDoc,doc, onSnapshot, query, where,deleteDoc } from "firebase/firestore";
import { useAuth } from "./Auth-Context";
const defaultValue = [];

const NoteContext = createContext(defaultValue);

const NoteProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();

  const changeHandler = (e) => {
    {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(noteColRef, {
        note: input,
        email:user.email,
      });
    }
    setInput("");
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  useEffect(() => {

    try {
        if(user){
            onSnapshot(query(noteColRef, where("email", "==", user.email)),(querySnapshot) => {
                let notesArray=[]
                querySnapshot.docs.map((doc) => {
                notesArray.push({...doc.data(),id:doc.id})
              })
              setNotes(notesArray)
          });
        }
    } catch (error) {
        console.log("error in initial getting notes",error)
    }
  }, [user]);


  return (
    <>
      <NoteContext.Provider
        value={{ notes, input, changeHandler, handleSubmit,handleDelete }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
};

const useNotes = () => useContext(NoteContext);
export { useNotes, NoteProvider };
