import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

const NotesListPage = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])
    
    let getNotes = async ()=>{
       let response = await axios('http://127.0.0.1:8000/api/notes/');
      
        setNotes(response.data);
       
    };

  return (
    <div>
        <div className="notes-list">
            {notes.map((note,index) => (
                <h3 key={index}>{note.body}</h3>
            ))}
        </div>
    </div>
  )
}

export default NotesListPage