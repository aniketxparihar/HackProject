import React from "react";
import { db } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useTheme } from "../../../Context/Theme-Context";


export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const { themeObject } = useTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "notes"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full m-8">
      <div className="input_container w-4/5 mr-8">
        <input
          type="text"
          placeholder="Add Note..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-14 rounded-xl p-2"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
        />
      </div>
      <div className="btn_container">
        <button
          className="h-14 w-36 bg-cyan-500 hover:bg-cyan-600 rounded-3xl "
          style={{ color: themeObject.text }}
        >
          Add
        </button>
      </div>
    </form>
  );
}