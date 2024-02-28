import './Track-Display.css'


const TrackDisplay = ({selectedTrack}) => {
    if (!selectedTrack || Object.keys(selectedTrack).length === 0) {
        return <h3 className='display-message'>No track selected</h3>;
      }
    return (
        <div className='Track-Display'>
            <article className="track-details">
                <img className='album-big' src={selectedTrack.img} alt={`${selectedTrack.title} by ${selectedTrack.artist} - ${selectedTrack.album} Album Cover`}/>
                <h2 className='title'>{selectedTrack.title}</h2>
                <p className='text'>{selectedTrack.artist}</p>
                <p className='text'>{selectedTrack.album}</p>
                <p className='text'>{selectedTrack.genre}</p>
                <p className='text'>{selectedTrack.bpm}</p>
            </article>
        </div>
    )
};

export default TrackDisplay