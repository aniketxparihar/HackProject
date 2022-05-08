import React from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from "../../Context/Auth-Context";
import { useProjectTodos } from "../../Context/ProjectTodoContext";
import { useTheme } from "../../Context/Theme-Context";
import {handleTaskComplete, handleTaskDelete} from "../../services/ProjectTodoServices"

function ProjectTodoInComplete() {
  const { themeObject } = useTheme();
  const { projectTodos } = useProjectTodos();
  const {user}=useAuth();
  const {projectId}=useParams();

  return (
    <div className="w-1/2 flex-col items-center mr-8 ">
      <h3 className="text-2xl m-8" style={{ color: themeObject.text }}>
        Incomplete Tasks
      </h3>
      <ul
        class="task-container list-cont flex-col items-center rounded-2xl"
        style={{ backgroundColor: themeObject.primary }}
      >
        {projectTodos.map((todo) => {
          return (
            todo.isComplete || (
              <li
                class="p-2 flex items-center rounded-xl mb-4"
                style={{
                  backgroundColor: themeObject.secondary,
                  color: themeObject.text,
                }}
              >
                <button
                  class="mr-8 flex items-center"
                  style={{ color: themeObject.text }}
                  onClick={()=>handleTaskComplete(projectId,todo)}
                >
                  <span class="material-symbols-outlined">done</span>
                </button>
                <span className="incompleted-task">{todo.taskName}</span>
                <button class="mr-8 flex items-center ml-auto text-red-600 " onClick={()=>handleTaskDelete(projectId,todo.id)}>
                  <span class="material-symbols-outlined">close</span>
                </button>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectTodoInComplete;
