import React, { useState, useEffect } from 'react';
import Note from '../Note/Note';
import styles from './NoteList.module.css'

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('http://localhost:8080/api/notes'); // החלף את הכתובת לפי ה-endpoint שלך
            const data = await response.json();
            setNotes(data);
        };

        fetchNotes();
    }, []);


    return (
        <div className={styles.notesContainer}>
            {notes.map(note => (
                <Note key={note.id} text={note.text} color={note.color} />
            ))}
        </div>
    );
}

export default NoteList;