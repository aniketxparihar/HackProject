import { createContext, useContext, useState, useEffect } from "react";
import {projectsColRef,db} from "../firebase/config";
import { addDoc,doc, onSnapshot, query, where,deleteDoc ,collection, setDoc} from "firebase/firestore";
import { useAuth } from "./Auth-Context";
const defaultValue = [];

const ProjectsContext = createContext(defaultValue);

const ProjectsProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  const changeHandler = (e) => {
    {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(projectsColRef, {
        project: input,
        email:user.email,
      });
    }
    setInput("");
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "projects", id));
  };

  useEffect(() => {
    try {
        if(user){
            onSnapshot(query(projectsColRef, where("email", "==", user.email)),(querySnapshot) => {
                let projectsArray=[]
                querySnapshot.docs.map((doc) => {
                    projectsArray.push({...doc.data(),id:doc.id})
              })
              setProjects(projectsArray)
          });

        }
    } catch (error) {
        console.log("error in initial getting projects",error)
    }
  }, [user]);


  return (
    <>
      <ProjectsContext.Provider
        value={{projects,input,handleSubmit,handleDelete,changeHandler }}
      >
        {children}
      </ProjectsContext.Provider>
    </>
  );
};

const useProjects = () => useContext(ProjectsContext);
export { useProjects, ProjectsProvider };
