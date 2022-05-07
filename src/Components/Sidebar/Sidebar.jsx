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
        to="/todo"
        className="search flex flex-col justify-center items-center bg-gray-600 rounded-xl text-gray-50 "
        style={{ color: themeObject.text }}
      >
        <span className="material-symbols-outlined">playlist_add</span>
        Todo
      </NavLink>
      <NavLink
        to="/search"
        className="search flex flex-col justify-center items-center  rounded-xl text-gray-50 "
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-outlined text-cyan-400">
          search
        </span>
        Search
      </NavLink>
      <NavLink
        to="/notes"
        className="notes flex flex-col justify-center items-center  rounded-xl text-gray-50 "
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-outlined text-cyan-400">
          description
        </span>
        Notes
      </NavLink>
      <NavLink
        to="/projects"
        className="projects flex flex-col justify-center items-center  rounded-xl text-gray-50 "
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-outlined text-cyan-400">
          folder_open
        </span>
        Projects
      </NavLink>
      <NavLink
        to="/dashboard"
        className="dashboard flex flex-col justify-center items-center  rounded-xl text-gray-50 "
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-outlined text-cyan-400">
          dashboard
        </span>
        Dashboard
      </NavLink>
    </div>
  );
}

export default Sidebar