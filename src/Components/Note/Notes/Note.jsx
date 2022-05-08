import React from "react";
import { useNotes } from "../../../Context/NoteContext";
import { useTheme } from "../../../Context/Theme-Context";
import "./Notes.css";
export default function Note({ note }) {
  const [newTitle, setNewTitle] = React.useState(note.note);
  const { themeObject } = useTheme();
  const { handleDelete } = useNotes();

  return (
    <div
      className=" flex flex-col m-8 w-80 h-60 rounded-xl"
      style={{ backgroundColor: themeObject.primary }}
    >
      <textarea
        cols={82}
        rows={3}
        type="text"
        value={note.note === "" ? newTitle : note.note}
        className="note-textarea flex items-start justify-start p-2 rounded-xl"
        // onChange={handleChange}
        style={{
          backgroundColor: themeObject.primary,
          color: themeObject.text,
        }}
      />
      <div className="flex ">
        <button
          className="ml-auto mr-2 mb-2 material-symbols-outlined text-red-500"
          onClick={() => handleDelete(note.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export { Note };
