import {React,useEffect} from "react";
import { useTheme } from "../../Context/Theme-Context";
import ProjectTodoComplete from "./ProjectTodoComplete"
import ProjectTodoInComplete from "./ProjectTodoInComplete";
import "../Todo/todo.css";
import { useProjectTodos } from "../../Context/ProjectTodoContext";
import { useParams } from "react-router-dom";

function Todo() {
   const {projectId}=useParams();
    const { themeObject } = useTheme();
    const {projectTodos,setProjectId,changeHandler,handleSubmit,input}=useProjectTodos();

    const calculateTasks=()=>{
       const count= projectTodos.reduce((acc,cur)=>{
           if(!cur.isComplete){
               acc=acc+1
           }
           return acc
        },0)
        return count
    }

    useEffect(() => {
      setProjectId(projectId)
    }, [])
    
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
        <ProjectTodoInComplete/>
        <ProjectTodoComplete/>
      </div>
    </div>
  );
}

export default Todo;
