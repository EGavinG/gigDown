import './UsbContent.css'
import { useState, useEffect } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import TrackDisplay from '../Track-Display/Track-Display'

const Main = () => {

        const getUsbLibrary = () => {
          fetch('http://localhost:3001/usblibrary')
          .then(response => response.json())
          .then(data => setTracklist([...tracklist, ...data.usblibrary]))
          .catch(error => console.log(error.message))
        }

        useEffect(() => {
          getUsbLibrary();
        }, [])

        const [tracklist, setTracklist] = useState([]);
        const [selectedTrack, setSelectedTrack] = useState(null);
      
        return (
          <div className="Main">
            <main>
              <Tracklist tracklist={tracklist} setSelectedTrack={setSelectedTrack} />
              <TrackDisplay selectedTrack={selectedTrack || {}} />
            </main>
          </div>
        );
}

export default Main;