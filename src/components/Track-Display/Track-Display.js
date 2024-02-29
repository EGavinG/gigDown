import './Track-Display.css'


const TrackDisplay = ({selectedTrack}) => {
    if (!selectedTrack || Object.keys(selectedTrack).length === 0) {
        return <h3 className='display-message'>No track selected</h3>;
      }
    return (
        <div className='Track-Display'>
            <div>
                <article className="track-details">
                    <img className='album-big' src={selectedTrack.img} alt={`${selectedTrack.title} by ${selectedTrack.artist} - ${selectedTrack.album} Album Cover`}/>
                    <h2 className='title'>{selectedTrack.title}</h2>
                <section className='track-info'>
                    <p className='text'>Artist: {selectedTrack.artist}</p>
                    <p className='text'>Album: {selectedTrack.album}</p>
                    <p className='text'>Genre: {selectedTrack.genre}</p>
                    <p className='text'> BPM: {selectedTrack.bpm}</p>
                    <p className='text'> Key: {selectedTrack.key}</p>
                </section>
                </article>
            </div>
        </div>
    )
};

export default TrackDisplay