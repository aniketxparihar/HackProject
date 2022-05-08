import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Pomodoro from '../../Components/Pomodoro/Pomodoro';
import Todo from '../../Pages/Todo/Todo'
import "./Project.css"
const Project = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2">
        <Outlet/>
        <div className="project-actions flex ">
          <Link
            to="/projects/project/tasks"
            className="tasks h-12  w-32 ml-8 flex justify-center items-center bg-cyan-400 hover:bg-cyan-500 rounded-xl"
          >
            Tasks
          </Link>
          <Link
            to="/projects/project/resources"
            className="resources h-12 w-32  ml-8 flex justify-center items-center bg-cyan-400 hover:bg-cyan-500 rounded-xl"
          >
            Resources
          </Link>
        </div>
      </div>
      <Pomodoro />
    </div>
  );
}

export default Project