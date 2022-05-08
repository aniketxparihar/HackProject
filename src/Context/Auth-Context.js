import { useContext, createContext, useState, useEffect } from "react"; 
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user,setUser]=useState(null)


     useEffect(() => {
         onAuthStateChanged(auth,(user)=>{
             if(user){
                 setUser(user)
                 setAuthToken(user.accessToken)
             }
             else{
                 setAuthToken(null)
             }
         })
     }, [])


    // useEffect(() => {
    //     if (localStorage.getItem("authToken"))
    //     {
    //         setAuthToken(localStorage.getItem("authToken"));
    //     }
    // },[])

    console.log(user)
    // console.log(authToken)


    return (
        <AuthContext.Provider value={{authToken,user,setAuthToken,setUser  }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };