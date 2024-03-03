import React, { useState, useEffect } from 'react';
import '../Tracklist/Tracklist';
import '../Track-Display/Track-Display';
import './UsbContent.css';

const Main = () => {
  const [tracklist, setTracklist] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [filteredTracklist, setFilteredTracklist] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getUsbLibrary();
  }, []);

  const getUsbLibrary = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/usblibrary');
      if (!response.ok) {
        throw new Error('Failed to fetch USB library data');
      }
      const data = await response.json();
      setTracklist(data.usblibrary);
      setFilteredTracklist(data.usblibrary);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
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
        {loading && <h2 className='loading'>Loading...</h2>} 
        {error && <h2 className='error'>Error: {error}</h2>} 
        {!loading && !error && (
          <>
            <Tracklist tracklist={filteredTracklist} setSelectedTrack={setSelectedTrack} handleSearch={handleSearch} /> 
            <TrackDisplay selectedTrack={selectedTrack || {}} />
          </>
        )}
      </main>
    </div>
  );
}

export default Main;
