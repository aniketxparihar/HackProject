import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import Pomodoro from '../../Components/Pomodoro/Pomodoro';
import ProjectTodo from "./ProjectTodo"

const Project = () => {
  const {projectId}=useParams();
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2">
        <Outlet/>
        <div className="project-actions flex ">
          <Link
            to={`/projects/${projectId}`}
            className="tasks h-12  w-32 ml-8 flex justify-center items-center bg-cyan-400 hover:bg-cyan-500 rounded-xl"
          >
            Tasks
          </Link>
          <Link
            to={`/projects/${projectId}/resources`}
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