import React, { useState, useEffect } from 'react';
import AddNotes from './Component/AddNotes';
import NoteList from './Component/NoteList';

function App() {
  const [noteList, setNoteList] = useState([]);
  
  
  const handleAdd = (content) => {
    const newNote = {
      id: new Date().valueOf(),
      content: content,
      date: new Date().toLocaleDateString()
    };
    setNoteList([...noteList, newNote]);
  };

  const handleEdit = (id, editedContent) => {
    const updatedNote = [...noteList].map((note) => {
      if(note.id === id) {
        note.content = editedContent;
        note.date = new Date().toLocaleDateString();
      };
      return note;
    })
    setNoteList(updatedNote);
  };

  const handleDelete = (id) => {
    const newNotes = noteList.filter((note) => note.id !== id);
    setNoteList(newNotes);
  };

  useEffect(()=> {
    const storeNotes = JSON.parse(localStorage.getItem('react-note-app-data'));
    if(storeNotes) {
      setNoteList(storeNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(noteList));
  }, [noteList]);

  return (
    <div className="App">
      <h1>Notes</h1>
      <AddNotes onAdd={handleAdd}/>
      <NoteList 
        noteList={noteList}
        onEdit={handleEdit}
        onDelete={handleDelete}/>
    </div>
  );
}

export default App;
