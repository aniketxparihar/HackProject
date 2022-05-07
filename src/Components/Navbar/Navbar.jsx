import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import "./Navbar.css"
const Navbar = () => {
    const { theme, themeHandler,themeObject } = useTheme();
  return (
    <div
      className="navbar__container bg-gray-400 m-8 h-20 rounded-2xl flex border-l-8 border-r-8 border-cyan-500"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="navbar__container--heading ml-8 text-2xl text-cyan-400 font-bold">
        HackProject
      </div>
      <div className="navbar__container--right m-8 flex justify-content items-center">
        <div
          className="navbar__container--date  p-2 rounded-xl"
          style={{
            color: themeObject.text,
            backgroundColor: themeObject.primary,
          }}
        >
          Date 1/2/2
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