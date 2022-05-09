import React from 'react'
import './Notes.css'
import AddTodo from '../../Components/Note/AddNote/AddNote'
import {Note} from '../../Components/Note/Notes/Note'
import { db } from '../../firebase/config'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useNotes } from '../../Context/NoteContext'
const Notes = () => {
  const {notes}=useNotes();

  return (
    <>
    <div>
    <AddTodo />
      </div>
      <div className="todo_container flex wrap">
          {notes.map((note) => (
          <Note
              key={note.id}
              note={note}
          />
          ))}
      </div>
</>
  )
}

export default Notes