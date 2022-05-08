import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuth } from '../../Context/Auth-Context';
import { useTheme } from '../../Context/Theme-Context';
import { auth } from '../../firebase/config';


import "./Navbar.css"
const Navbar = () => {
  const { theme, themeHandler, themeObject } = useTheme();
  const {setAuthToken}=useAuth();
  const logoutHandler=()=>{
    signOut(auth).then(()=>{
      console.log("logout success")
      setAuthToken(null)
    }).catch((error)=>{
      console.log(error.message)
    })
  }
  const date = new Date();
  return (
    <div
      className="navbar__container bg-gray-400 m-8 h-20 rounded-2xl flex border-l-8 border-r-8 border-cyan-500"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="navbar__container--heading ml-8 text-2xl text-cyan-400 font-bold">
        HackProject
      </div>
      <div className="navbar__container--right m-8 flex justify-content items-center">
        <div className="navbar__container--theme mr-6 flex justify-content items-center">
          <span
            className="material-symbols-outlined rounded-full p-2 cursor-pointer"
            style={{
              color: themeObject.text,
              backgroundColor: themeObject.primary,
            }}
            onClick={logoutHandler}
          >
            logout
          </span>
        </div>
        <div
          className="navbar__container--date  p-2 rounded-xl"
          style={{
            color: themeObject.text,
            backgroundColor: themeObject.primary,
          }}
        >
         {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
        </div>
        <div className="navbar__container--theme ml-6 flex justify-content items-center">
          <span
            className="material-symbols-outlined rounded-full p-2 cursor-pointer"
            style={{
              color: themeObject.text,
              backgroundColor: themeObject.primary,
            }}
            onClick={themeHandler}
          >
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar