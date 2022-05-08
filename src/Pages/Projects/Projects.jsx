import React from "react";
import { Link } from "react-router-dom";
import Pomodoro from "../../Components/Pomodoro/Pomodoro"
import { useTheme } from "../../Context/Theme-Context";
import "./Project.css"
const Projects = () => {
  const { themeObject } = useTheme();
  return (
    <div className="projects__container flex ">
      <div className="projects__wrapper ">
        <div className="input flex  m-8">
          <input
            type="text"
            className="w-4/5 h-12 rounded-xl mr-8 p-2"
            style={{ backgroundColor: themeObject.primary }}
            placeholder="Add a new project"
          />
          <button className="h-12 w-36 bg-cyan-500 rounded-xl "> Add </button>
        </div>
        <div className="all-projects flex ">
          <Link
            to="/projects/project/tasks"
            className="project h-32  m-8 rounded-xl flex flex-col justify-start items-start font-bold cursor-pointer "
            style={{
              backgroundColor: themeObject.primary,
            }}
          >
            <div
              className="project-name text-2xl  m-4"
              style={{
                color: themeObject.text,
                backgroundColor: themeObject.primary,
              }}
            >
              Project One
            </div>
          </Link>{" "}
          <Link
            to="/projects/project/tasks"
            className="project h-32  m-8 rounded-xl flex flex-col justify-start items-start font-bold cursor-pointer "
            style={{
              backgroundColor: themeObject.primary,
            }}
          >
            <div
              className="project-name text-2xl  m-4"
              style={{
                color: themeObject.text,
                backgroundColor: themeObject.primary,
              }}
            >
              Project One
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
