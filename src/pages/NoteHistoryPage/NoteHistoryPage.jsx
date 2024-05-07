import { useState } from "react";
import NoteList from "../../components/NoteList/NoteList";

export default function NoteHistoryPage() {
    const [notes, setNotes] = useState([])
    const [activeText, setActiveText] = useState(null)

    return(
        <div>
            <div>
                <form>
                    <div>
                        <h1>Notes</h1>
                        <aside>
                            <NoteList
                                notes={notes}
                                activeText={activeText}
                                // onNoteClick={handleClick}
                            />
                        </aside>
                    </div>
                </form>
            </div>
        </div>
    )
}

