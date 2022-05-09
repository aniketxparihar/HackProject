import React from 'react'
import { useTheme } from '../../Context/Theme-Context'
import { useTodos } from '../../Context/TodoContext';
import {handleComplete, handleDelete} from "../../services/TodoServices"

function Completed() {
    const {themeObject}=useTheme();
    const {todos}=useTodos();

    return (
        <div class="complete-container w-1/2 flex-col items-center ">
          <h3 className="text-2xl m-8" style={{ color: themeObject.text }}>
            Completed Tasks
          </h3>
          <ul
            class="task-container list-cont flex-col items-center rounded-xl"
            style={{ backgroundColor: themeObject.primary }}
          >
              {todos.map((todo) => {
          return (
            todo.isComplete && (
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
                  onClick={()=>handleComplete(todo)}
                >
                  <span class="material-symbols-outlined">restore</span>
                </button>
                <span className="completed-task ">{todo.todo}</span>
                <button class="mr-8 flex items-center ml-auto text-red-600 " onClick={()=>handleDelete(todo.id)}>
                  <span class="material-symbols-outlined">close</span>
                </button>
              </li>
            )
          );
        })}
          </ul>
        </div>
    )
}

export default Completed
