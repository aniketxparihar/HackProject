import React from "react";
import { useTheme } from "../../../Context/Theme-Context";
import { useNotes } from "../../../Context/NoteContext";


export default function AddTodo() {
  const { themeObject } = useTheme();
  const {input,handleSubmit,changeHandler}=useNotes();

  return (
    <form onSubmit={handleSubmit} className="flex w-4/5 m-8">
      <div className="input_container w-4/5 mr-8">
        <input
          type="text"
          placeholder="Add Note..."
          value={input}
          onChange={changeHandler}
          className="w-full h-14 rounded-xl p-2"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        />
      </div>
      <div className="btn_container">
        <button
        type="submit"
          className="h-14 w-36 bg-cyan-500 hover:bg-cyan-600 rounded-3xl "
          style={{ color: themeObject.text }}
        >
          Add
        </button>
      </div>
    </form>
  );
}