import './Tracklist.css'
import Track from '../Track/Track'
import '../Track-Display/Track-Display'
import SearchBar from '../SeachBar/SearchBar'



const Tracklist = ({tracklist, setSelectedTrack, handleSearch}) => {

    const handleTrackClick = (track) => {
      setSelectedTrack(track);
    };

    const trackCards = tracklist.map(track => {

        return (
          <Track
            img={track.img}
            id={track.id}
            title={track.title}
            artist={track.artist}
            genre={track.genre}
            bpm={track.bpm}
            keys={track.keys}
            duration={track.duration}
            key={track.id}
            onClick={() => handleTrackClick(track)}
            tabIndex="0"
          />
        )
      })

    return (
        <div className ='Tracklist'>
            <h2 className='usb-title'>USB Library</h2>
            <SearchBar onSearch={handleSearch} />
          {!tracklist.length && <h3 className='message'>USB Library Empty -- Add Some Tracks!</h3>}
        <section className='tracklist-section'>
            {trackCards}
        </section>
        </div>
    )
}

export default Tracklist