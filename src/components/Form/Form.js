import { useState } from 'react';
import './Form.css';

function Form(){
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [bpm, setBpm] = useState("");
  const [key, setKey] = useState("");
  const [duration, setDuration] = useState("");

    return (
      <form className='Form'>
        <h2 className='input-title'>Input Track</h2>
    
        <input 
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Title"
        />

        <input
          type='text'
          placeholder='Artist'
          name='description'
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          aria-label="Artist"
        />

        <input
          type='text'
          placeholder='Album'
          name='description'
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          aria-label="Album"
        />

        <input
          type='text'
          placeholder='Genre'
          name='description'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          aria-label="Genre"
        />  

        <input
          type='text'
          placeholder='BPM'
          name='description'
          value={bpm}
          onChange={(e) => setBpm(e.target.value)}
          aria-label="BPM"
        />  

        <input
          type='text'
          placeholder='Key'
          name='description'
          value={key}
          onChange={(e) => setKey(e.target.value)}
          aria-label="Key"
        />  

        <input
          type='text'
          placeholder='Duration'
          name='description'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          aria-label="Duration"
        />  

        <button className='submit' aria-label="Submit-Button">SUBMIT</button>
      </form>
    )
}

export default Form;