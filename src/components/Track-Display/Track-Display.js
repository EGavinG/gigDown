import './Track-Display.css';
import PropTypes from 'prop-types';

const TrackDisplay = ({ selectedTrack }) => {
    if (!selectedTrack || Object.keys(selectedTrack).length === 0) {
        return <h3 className='display-message'>No track selected</h3>;
    }

    return (
        <article className="track-details">
            <img className='album-big' src={`http://localhost:3001/${selectedTrack.img}`} alt={`${selectedTrack.title} by ${selectedTrack.artist} - ${selectedTrack.album} Album Cover`} />
            <h2 className='title'>{selectedTrack.title}</h2>
            <section className='track-info'>
                <p className='text'>Artist: {selectedTrack.artist}</p>
                <p className='text'>Album: {selectedTrack.album}</p>
                <p className='text'>Genre: {selectedTrack.genre}</p>
                <p className='text'>BPM: {selectedTrack.bpm}</p>
                <p className='text'>Key: {selectedTrack.key}</p>
                <p className='text'>Duration: {selectedTrack.duration}</p>
            </section>
        </article>
    );
};


TrackDisplay.propTypes = {
    selectedTrack: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string,
        genre: PropTypes.string,
        bpm: PropTypes.string,
        key: PropTypes.string,
        duration: PropTypes.string,
        img: PropTypes.string,
    }),
};

export default TrackDisplay;
