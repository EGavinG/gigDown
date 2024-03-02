import React, { useState, useEffect } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import TrackDisplay from '../Track-Display/Track-Display';
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
      const response = await fetch('http://localhost:3001/usblibrary');
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
        {loading && <p>Loading...</p>} 
        {error && <p>Error: {error}</p>} 
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
