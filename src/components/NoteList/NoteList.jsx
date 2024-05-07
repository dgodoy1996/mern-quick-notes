export default function NoteList({ notes }) {
    return (
      <div>
        {notes.length === 0 ? (
          <p>No Notes Yet!</p>
        ) : (
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                <strong>{note.text}</strong> - {note.createdAt}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }