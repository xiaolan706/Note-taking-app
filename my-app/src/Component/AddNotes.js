import React, {useState} from 'react';


const AddNotes = ({onAdd}) => {
    const [value, setValue] = useState('');

    return (
    <div>
        <input  value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => {
            onAdd(value);
            setValue('');
        }}>
            Add Notes</button>
    </div>
  )
}

export default AddNotes;
