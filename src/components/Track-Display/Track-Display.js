import './Track-Display.css'
import Image from '../../255-200.png';


const TrackDisplay = ({title, artist, album}) => {

    return (
        <div className='Track-Display'>
            <article className="track-details">
                <img className='album-big' src={Image} alt={`${title} by ${artist} - ${album} Album Cover`}/>
                <h2 className='title'>Title: Title</h2>
                <p className='text'>Artist: Artist</p>
                <p className='text'>Album: Album</p>
                <p className='text'>Genre: Genre</p>
                <p className='text'>BPM: Bpm</p>
            </article>
        </div>
    )
};

export default TrackDisplay