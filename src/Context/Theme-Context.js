import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const [themeObject, setThemeObject] = useState({ primary: "#1e293b", secondary: "#475569", text: "#f9fafb" });
    useEffect(() => {
        if (theme === "light")
            setThemeObject({ primary: "#f3f4f6", secondary: "#d1d5db", text: "#111827" });
        else
            setThemeObject({ primary: "#1e293b", secondary: "#475569", text: "#f9fafb" });
    },[theme]) 
    const themeHandler = () => theme === "light"?setTheme("dark"):setTheme("light");
    return (
        <ThemeContext.Provider value={ {theme,themeObject,themeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };