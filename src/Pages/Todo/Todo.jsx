import React from "react";
import { useTheme } from "../../Context/Theme-Context";
import "./todo.css";

function Todo() {
    const { themeObject } = useTheme();
  return (
    <div class="todo-container relative">
      <header class="todo-header flex-row justify-space-between align-center">
        <form action="" class="form">
          <input
            type="text"
            class="w-4/5  p-2 mr-8 rounded-xl"
            style={{
              backgroundColor: themeObject.primary,
              color: themeObject.text,
            }}
            placeholder="Add Task"
          />
          <button
            type="submit"
            class="h-14 w-36 bg-cyan-500 rounded-full hover:bg-cyan-600"
            style={{ color: themeObject.text }}
          >
            Add
          </button>
        </form>
        <h3
          class="tasks-left rounded-xl text-left p-2 bg-cyan-500 absolute"
          style={{
            color: themeObject.text,
          }}
        >
          0 task(s) left
        </h3>
      </header>
      <div class="flex justify-center">
        <div className="w-1/2 flex-col items-center mr-8 ">
          <h3 className="text-2xl m-8" style={{ color: themeObject.text }}>
            Incomplete Tasks
          </h3>
          <ul
            class="task-container list-cont flex-col items-center rounded-2xl"
            style={{ backgroundColor: themeObject.primary }}
          >
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
              >
                <span class="material-symbols-outlined">done</span>
              </button>
              <span className="incompleted-task"> breakfast </span>
              <button class="mr-8 flex items-center ml-auto text-red-600 ">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
          </ul>
        </div>
        <div class="complete-container w-1/2 flex-col items-center ">
          <h3 className="text-2xl m-8" style={{ color: themeObject.text }}>
            Completed Tasks
          </h3>
          <ul
            class="task-container list-cont flex-col items-center rounded-xl"
            style={{ backgroundColor: themeObject.primary }}
          >
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
              >
                <span class="material-symbols-outlined text-green-400">restore</span>
              </button>
              <span className="completed-task"> breakfast </span>
              <button class="mr-8 flex items-center ml-auto text-red-600 ">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="rounded-full h-14 w-36 bg-red-600 mt-8 ml-auto"
        style={{ color: themeObject.text }}
      >
        Clear all
      </button>
    </div>
  );
}

export default Todo;
