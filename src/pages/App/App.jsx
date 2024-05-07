import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteList from '../../components/NoteList/NoteList';
import NewNotePage from '../NewNotePage/NewNotePage';

export default function App() {
  const [notes, setNotes] = useState([])
  const [user, setUser] =useState(getUser())

  const handleAddNote = (text) => {
    const newNote = {
      text: text,
      createdAt: new Date().toLocaleString(), // Format date/time
    }
    setNotes([...notes, newNote])
  }

  return (
    <main className="App">
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
        <NewNotePage handleAddNote={handleAddNote} />
        <NoteList notes={notes} />
        </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}