import { createContext, useContext, useState, useEffect } from "react";
import { colRef, db } from "../firebase/config";
import {
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
  collection,
  deleteDoc,doc
} from "firebase/firestore";
import { useAuth } from "./Auth-Context";
const defaultValue = [];

const ResourceContext = createContext(defaultValue);

const ResourceProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [projecId, setProjectId] = useState("");
  const [resources, setResources] = useState([]);
  const { user } = useAuth();
  const changeHandler = (e) => {
    {
      setInput(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(collection(db, "projects", projecId, "project-resources"), {
        resourceLink: input,
        email: user.email,
      });
    }
    setInput("");
  };
  const handleResourceDelete = async (projectId,id) => {
    await deleteDoc(doc(db, "projects",projectId,"project-resources", id));
  };

  useEffect(() => {
    try {
      if (user && projecId) {
        onSnapshot(
          query(
            collection(db, "projects",projecId, "project-resources"),
            where("email", "==", user.email)
          ),
          (querySnapshot) => {
            let resourcesArray = [];
            querySnapshot.docs.map((doc) => {
              resourcesArray.push({ ...doc.data(), id: doc.id });
            });
            setResources(resourcesArray);
          }
          );
        }
    } catch (error) {
        console.log("error in initial resources", error);
    }
  }, [user, projecId]);

  return (
    <>
      <ResourceContext.Provider
        value={{
          input,
          resources,
          setProjectId,
          changeHandler,
          handleSubmit,
          handleResourceDelete
        }}
      >
        {children}
      </ResourceContext.Provider>
    </>
  );
};

const useResources = () => useContext(ResourceContext);
export { useResources, ResourceProvider };
