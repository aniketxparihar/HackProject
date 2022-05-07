import React from 'react'
import "./todo.css"

function Todo() {
    return (
        <div class="todo-container">
      <header class="todo-header flex-row justify-space-between align-center">
        <form action="" class="form">
          <input type="text" class="input" />
          <button type="submit" class="btn addBtn">Add</button>
        </form>
        <h3 class="task-count text-left">0 task left</h3>
      </header>
      <div class="flex-row justify-space-between">
        <div class="incomplete-container flex-column align-center">
          <h3>Tasks</h3>
          <ul class="task-container list-cont flex-column align-center">
            <li class="list-items flex-row-justify-align-center">
                <button class="btn todo-btn flex-row-justify-align-center">^</button>
                <span> breakfast </span>
                <button class="btn todo-btn flex-row-justify-align-center btn-delete">X</button>
            </li>
            <li class="list-items flex-row-justify-align-center">
              <button class="btn todo-btn flex-row-justify-align-center">^</button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">X</button>
            </li>
          </ul>
        </div>
        <div class="complete-container flex-column align-center">
          <h3>Tasks</h3>
          <ul class="task-container list-cont flex-column align-center">
            <li class="list-items flex-row-justify-align-center ">
             <button class="btn todo-btn flex-row-justify-align-center">^</button>
              <span> breakfast </span>
              <button class="btn todo-btn flex-row-justify-align-center btn-delete">X</button>
            </li>
            <li class="list-items flex-row-justify-align-center">
                <button class="btn todo-btn flex-row-justify-align-center">^</button>
                <span> breakfast </span>
                <button class="btn todo-btn flex-row-justify-align-center btn-delete">X</button>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn">Clear all</button>
    </div>
    )
}

export default Todo
