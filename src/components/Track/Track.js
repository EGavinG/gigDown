import './Track.css'
import PropTypes from 'prop-types';

const Track = ({ artist, title, img, onClick, tabIndex }) => {
    return (
        <section className ='Track' onClick={onClick} tabIndex={tabIndex}>
            <img src={`http://localhost:3001/${img}`} className='album-border' alt={`${title} by ${artist}`}/>
            <p>{title}</p>
            <p>{artist}</p>
        </section>
    )
}

Track.propTypes = {
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    tabIndex: PropTypes.string,
  };
  
  Track.defaultProps = {
    onClick: () => {}, 
    tabIndex: 0, 
  };

export default Track