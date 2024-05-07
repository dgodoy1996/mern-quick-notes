import React, { useState } from 'react';

export default function NewNotePage({ handleAddNote }) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddNote(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleChange} />
      <button type="submit">Add Note</button>
    </form>
  )
}
