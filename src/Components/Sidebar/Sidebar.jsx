import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';

const Sidebar = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="bg-gray-400 sidebar__container mr-8 rounded-xl flex flex-col items-center "
      style={{ backgroundColor: themeObject.secondary }}
    >
      <NavLink
        to="/search"
        className="search flex flex-col justify-center items-center  rounded-xl  bg-blue-400 "
      >
        <span className="material-symbols-outlined ">search</span>
      </NavLink>
      <NavLink
        to="/todo"
        className="search flex flex-col justify-center items-center  rounded-xl bg-cyan-400 "
      >
        <span className="material-symbols-outlined ">playlist_add</span>
      </NavLink>

      <NavLink
        to="/notes"
        className="notes flex flex-col justify-center items-center  rounded-xl  bg-indigo-300 "
      >
        <span className="material-symbols-outlined ">description</span>
      </NavLink>
      <NavLink
        to="/projects"
        className="projects flex flex-col justify-center items-center  rounded-xl bg-violet-300 "
      >
        <span className="material-symbols-outlined ">folder_open</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        className="dashboard flex flex-col justify-center items-center  rounded-xl bg-pink-300 "
      >
        <span className="material-symbols-outlined ">dashboard</span>
      </NavLink>
    </div>
  );
}

export default Sidebar