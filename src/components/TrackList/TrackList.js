import './TrackList.css'
import PropTypes from 'prop-types';
import Track from '../Track/Track'
import SearchBar from '../SeachBar/SearchBar'



const TrackList = ({tracklist, setSelectedTrack, handleSearch}) => {

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
            keys={track.key}
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

TrackList.propTypes = {
  tracklist: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      bpm: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
  })).isRequired,
  setSelectedTrack: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default TrackList
