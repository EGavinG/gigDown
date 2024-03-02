import './UsbContent.css'
import { useState, useEffect } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import TrackDisplay from '../Track-Display/Track-Display'

const Main = () => {
  const [tracklist, setTracklist] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [filteredTracklist, setFilteredTracklist] = useState([]);

  useEffect(() => {
    getUsbLibrary();
  }, []);

  const getUsbLibrary = () => {
    fetch('http://localhost:3001/usblibrary')
    .then(response => response.json())
    .then(data => {
      setTracklist(data.usblibrary);
      setFilteredTracklist(data.usblibrary); 
    })
    .catch(error => console.log(error.message))
  };

  const handleSearch = (searchTerm) => {
    const filtered = tracklist.filter(track =>
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTracklist(filtered);
  };
  
  return (
    <div className="Main">
      <main>
        <Tracklist tracklist={filteredTracklist} setSelectedTrack={setSelectedTrack} handleSearch={handleSearch} /> 
        <TrackDisplay selectedTrack={selectedTrack || {}} />
      </main>
    </div>
  );
}

export default Main;
