import { useContext, createContext, useEffect,useState, useReducer } from "react";

import { db,linkColRef } from "../firebase/config";
import { addDoc, onSnapshot, query,deleteDoc,doc } from "firebase/firestore";

const ShortLinkContext = createContext();

const ShortLinkProvider = ({ children }) => {
  const [searchState,setSearchState]=useState({
    title:"",
    URL:"",
  });
  const [searchData,setSearchData]=useState([])
  const [isAddLink, setIsAddLink] = useState(false);


  const changeHandler = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setSearchState((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(linkColRef, {
      title: searchState.title,
      URL: searchState.URL,
    });
    setSearchState({URL:"",title:""});
    setIsAddLink(false)
  };

  const handleDelete=async(id)=>{
    await deleteDoc(doc(db,"mylinks",id))

  }

  useEffect(() => {
    const q = query(linkColRef);
    const unSub = onSnapshot(q, (QuerySnapshot) => {
      let searchArray = [];
      QuerySnapshot.forEach((doc) => {
        searchArray.push({ ...doc.data(), id: doc.id });
      });
      setSearchData(searchArray);
    });
    return () => unSub();
  }, []);

  return (
    <ShortLinkContext.Provider value={{searchState,searchData,handleSubmit,handleDelete,changeHandler,isAddLink,setIsAddLink }}>
      {children}
    </ShortLinkContext.Provider>
  );
};

const useShortLink = () => useContext(ShortLinkContext);

export { useShortLink, ShortLinkProvider };
