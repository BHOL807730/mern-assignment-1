
import { useState, useEffect } from "react";

function App() {

  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {

    fetchNotes();

  }, []);

  const fetchNotes = async () => {

    const response = await fetch("http://localhost:5000/api/notes");

    const data = await response.json();

    setNotes(data);

  };

  const handleAddNote = async () => {

    const response = await fetch("http://localhost:5000/api/notes",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({

        title,
        content

      })

    });

    const newNote = await response.json();

    setNotes([...notes,newNote]);

    setTitle("");

    setContent("");

  };

  return(

    <div style={{padding:"20px"}}>

      <h1>MicroNotes</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddNote}>
        Add Note
      </button>

      <hr/>

      <ul>

        {notes.map((note)=>(

          <li key={note.id}>
            {note.title} : {note.content}
          </li>

        ))}

      </ul>

    </div>

  );

}

export default App;