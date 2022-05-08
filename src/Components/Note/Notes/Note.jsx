import React from "react";
import { useTheme } from "../../../Context/Theme-Context";
import "./Notes.css"
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
    const { themeObject } = useTheme();


  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div
      className=" flex flex-col m-8 w-80 h-60 rounded-xl"
      style={{ backgroundColor: themeObject.primary }}
    >
      <textarea
        cols={82}
        rows={3}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="note-textarea flex items-start justify-start p-2 rounded-xl"
        onChange={handleChange}
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      />
      <div className="flex ">
        
        {/* <button
          className="mr-2 material-symbols-outlined text-cyan-500"
          onClick={() => handleEdit(todo, newTitle)}
        >
          edit
        </button> */}
        <button
          className="ml-auto mr-2 mb-2 material-symbols-outlined text-red-500"
          onClick={() => handleDelete(todo.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}