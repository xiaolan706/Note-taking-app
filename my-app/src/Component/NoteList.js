import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ noteList, onEdit, onDelete }) {
  return (
    <div>
        <ul>
            {noteList.map((note) => {
                return(
                    <NoteItem key={note.id}
                        id={note.id}
                        content={note.content}
                        date={note.date}
                        onEdit={onEdit} 
                        onDelete={onDelete}/>
                )
            })}
        </ul>
    </div>
  )
}

export default NoteList