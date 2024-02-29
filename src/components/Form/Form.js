import { useState } from 'react';
import './Form.css';

function Form({onSubmit}){
  const [trackData, setTrackData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    bpm: '',
    key: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trackData);
    setTrackData({
      title: '',
      artist: '',
      album: '',
      genre: '',
      bpm: '',
      key: '',
      duration: ''
    });
  };

    return (
      <form className='Form' onSubmit={handleSubmit}>
        <h2 className='input-title'>Input Track</h2>
    
        <input 
          type='text'
          placeholder='Title'
          name='title'
          value={trackData.title}
          onChange={handleChange}
          aria-label="Title"
        />

        <input
          type='text'
          placeholder='Artist'
          name='artist'
          value={trackData.artist}
          onChange={handleChange}
          aria-label="Artist"
        />

        <input
          type='text'
          placeholder='Album'
          name='album'
          value={trackData.album}
          onChange={handleChange}
          aria-label="Album"
        />

        <input
          type='text'
          placeholder='Genre'
          name='genre'
          value={trackData.genre}
          onChange={handleChange}
          aria-label="Genre"
        />  

        <input
          type='text'
          placeholder='BPM'
          name='bpm'
          value={trackData.bpm}
          onChange={handleChange}
          aria-label="BPM"
        />  

        <input
          type='text'
          placeholder='Key'
          name='key'
          value={trackData.key}
          onChange={handleChange}
          aria-label="Key"
        />  

        <input
          type='text'
          placeholder='Duration'
          name='duration'
          value={trackData.duration}
          onChange={handleChange}
          aria-label="Duration"
        />  

        <button className='submit' aria-label="Submit-Button">SUBMIT</button>
      </form>
    )
}

export default Form;