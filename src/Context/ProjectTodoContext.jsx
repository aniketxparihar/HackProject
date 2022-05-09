import { createContext, useContext, useState, useEffect } from "react";
import { colRef, db } from "../firebase/config";
import {
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
  collection,
} from "firebase/firestore";
import { useAuth } from "./Auth-Context";
import { useParams } from "react-router-dom";
const defaultValue = [];

const ProjectTodoContext = createContext(defaultValue);

const ProjectTodoProvider = ({ children }) => {
  const [input, setInput] = useState("");
 const [projecId,setProjectId]= useState("");
  const [projectTodos, setProjectTodos] = useState([]);
  
  const { user } = useAuth();
  const changeHandler = (e) => {
    {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(collection(db, "projects",projecId, "project-tasks"), {
        taskName: input,
        isComplete: false,
        email: user.email,
      });
    }
    setInput("");
  };

  useEffect(() => {
    try {
      if (user && projecId) {
        onSnapshot(
          query(
            collection(db, "projects",projecId, "project-tasks"),
            where("email", "==", user.email)
          ),
          (querySnapshot) => {
            let projectTodosArray = [];
            querySnapshot.docs.map((doc) => {
              projectTodosArray.push({ ...doc.data(), id: doc.id });
            });
            setProjectTodos(projectTodosArray);
          }
        );
      }
    } catch (error) {
      console.log("error in initial projectTodos", error);
    }
  }, [user,projecId]);

  return (
    <>
      <ProjectTodoContext.Provider
        value={{ projectTodos, input, setProjectId,changeHandler, handleSubmit }}
      >
        {children}
      </ProjectTodoContext.Provider>
    </>
  );
};

const useProjectTodos = () => useContext(ProjectTodoContext);
export { useProjectTodos, ProjectTodoProvider };
