import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const [themeObject, setThemeObject] = useState({ primary: "#111827", secondary: "#374151", text: "#f3f4f6" });
    useEffect(() => {
        if (theme === "light")
            setThemeObject({ primary: "#f9fafb", secondary: "#e5e7eb", text: "#1f2937" });
        else
            setThemeObject({ primary: "#111827", secondary: "#374151", text: "#f9fafb" });
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