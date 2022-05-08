import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState("");
    useEffect(() => {
        if (localStorage.getItem("authToken"))
        {
            setAuthToken(localStorage.getItem("authToken"));
        }
    },[])
    const [user, setUser] = useState(false);
    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        setAuthToken("");
    }
    return (
        <AuthContext.Provider value={{authToken,user,setAuthToken,setUser,logoutHandler  }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };