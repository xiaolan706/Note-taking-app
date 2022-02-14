import React, {useState} from 'react';


const AddNotes = ({onAdd}) => {
    const [value, setValue] = useState('');

    return (
    <div className='add-note-container'>
        <input className='add-note'
            type="text" 
            placeholder='Add notes here...'
            value={value} 
            onChange={(e) => setValue(e.target.value)} />
        <button className='add-note-btn'
            onClick={() => {
            onAdd(value);
            setValue('');
        }}>
            Add Notes</button>
    </div>
  )
}

export default AddNotes;
