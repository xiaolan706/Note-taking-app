import React, {useState} from 'react'

function NoteItem({id, content, date, onEdit, onDelete }) {
    const [editedNoteId, setEditedNoteId] = useState(null);
    const [editedContent, setEditedContent] = useState('');

  return (
    <div>
        <li>
            {editedNoteId === id ? 
                (<input type="text" value={editedContent} 
                        onChange={(e) => setEditedContent(e.target.value)} 
                />) : (<p>{content}</p>)}
            <p>{date}</p>
            {editedNoteId === id ?
                (<button onClick={() => {
                    onEdit(id, editedContent)
                    setEditedNoteId(null);
                    setEditedContent('');
                    }} >Confirm</button>
                ) : (<button onClick={() => setEditedNoteId(id)}>Edit</button>)}
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    </div>
  )
}

export default NoteItem;