import React from "react";
import { useTheme } from "../../Context/Theme-Context";
import "./todo.css";

function Todo() {
    const { themeObject } = useTheme();
  return (
    <div class="todo-container">
      <header class="todo-header flex-row justify-space-between align-center">
        <form action="" class="form">
          <input type="text" class="input" />
          <button type="submit" class="btn addBtn p-3" style={{ color: themeObject.text }}>
            Add
          </button>
        </form>
        <h3 class="task-count text-left">0 task left</h3>
      </header>
      <div class="flex-row justify-space-between m-4">
        <div class="incomplete-container flex-column align-center">
          <h3>Tasks</h3>
          <ul class="task-container list-cont flex-column align-center">
            <li class="list-items flex-row-justify-align-center rounded">
              <button class="btn todo-btn flex-row-justify-align-center">
                <span class="material-symbols-outlined">done</span>
              </button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
            <li class="list-items flex-row-justify-align-center rounded">
              <button class="btn todo-btn flex-row-justify-align-center">
                <span class="material-symbols-outlined">done</span>
              </button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
          </ul>
        </div>
        <div class="complete-container flex-column align-center">
          <h3>Tasks</h3>
          <ul class="task-container list-cont flex-column align-center">
            <li class="list-items flex-row-justify-align-center rounded">
              <button class="btn todo-btn flex-row-justify-align-center">
                <span class="material-symbols-outlined">done</span>
              </button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
            <li class="list-items flex-row-justify-align-center rounded">
              <button class="btn todo-btn flex-row-justify-align-center">
                <span class="material-symbols-outlined">done</span>
              </button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">
                <span class="material-symbols-outlined">close</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn btn-delete m-4 p-3 rounded" style={{ color: themeObject.text }}>Clear all</button>
    </div>
  );
}

export default Todo;
