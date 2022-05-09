import React from "react";
import { useTheme } from "../../Context/Theme-Context";
import { useTodos } from "../../Context/TodoContext";
import Completed from "./Completed";
import InComplete from "./InComplete";
import {handleClearAll} from "../../services/TodoServices"
import "./todo.css";

function Todo() {
    const { themeObject } = useTheme();
    const {todos,changeHandler,handleSubmit,input}=useTodos();
    const calculateTasks=()=>{
       const count= todos.reduce((acc,cur)=>{
           if(!cur.isComplete){
               acc=acc+1
           }
           return acc
        },0)
        return count
    }
    
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
            value={input} onChange={changeHandler}
          />
          <button
            type="submit"
            class="h-14 w-36 bg-cyan-500 rounded-full hover:bg-cyan-600"
            style={{ color: themeObject.text }}
            onClick={(e)=>handleSubmit(e)}
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
          {calculateTasks()} task(s) left
        </h3>
      </header>
      <div class="flex justify-center">
        <InComplete/>
        <Completed/>
      </div>
      <button
        class="rounded-full h-14 w-36 bg-red-600 mt-8 ml-auto"
        style={{ color: themeObject.text }}
        onClick={()=>handleClearAll(todos)}
      >
        Clear all
      </button>
    </div>
  );
}

export default Todo;
