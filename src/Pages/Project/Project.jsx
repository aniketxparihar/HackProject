import React from 'react'
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Pomodoro from '../../Components/Pomodoro/Pomodoro';
import { useProjects } from '../../Context/ProjectsContext';
import { useProjectTodos } from '../../Context/ProjectTodoContext';
import ProjectTodo from "./ProjectTodo"

const Project = () => {
  const { projectId } = useParams();
  const { projectTodos } = useProjectTodos();
  const { countTasks,setCountTasks } = useProjects();
  useEffect(() => {
    setCountTasks(projectTodos.filter((todo)=>todo.isComplete).length)
}, [])
  return (
    <div className="project-task-container flex">
      <div className="project-task__wrapper flex flex-col w-1/2 h-full">
        <div className="project-actions flex mb-10 mt-2">
          <Link
            to={`/projects/${projectId}`}
            className="tasks h-10  w-32 ml-8 flex justify-center items-center bg-cyan-400 hover:bg-cyan-500 rounded-xl"
          >
            Tasks
          </Link>
          <Link
            to={`/projects/${projectId}/resources`}
            className="resources h-10 w-32  ml-8 flex justify-center items-center bg-cyan-400 hover:bg-cyan-500 rounded-xl"
          >
            Resources
          </Link>
        </div>
        <Outlet />
      </div>
      <Pomodoro />
    </div>
  );
}

export default Project