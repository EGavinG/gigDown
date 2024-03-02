import './Checklist.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Checklist = ({ checklist, onDelete }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const savedCheckedItems = JSON.parse(localStorage.getItem("checkedItems"));
    if (savedCheckedItems) {
      setCheckedItems(savedCheckedItems);
    }
  }, []);

  const handleCheckboxClick = (index) => {
    const newCheckedItems = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newCheckedItems);
    localStorage.setItem("checkedItems", JSON.stringify(newCheckedItems));
  };

  if (!checklist || checklist.length === 0) {
    return <h3 className='display-message'>No Tracks To Currently Download!</h3>;
  }

  return (
    <div className='Checklist'>
      <h2 className='checklist-title'>Download Checklist</h2>
      <ol className='checklist-section'>
        <section className='list'>
          {checklist.map((track, index) => (
            <li key={index}>
              <p className='text'>Title: {track.title}</p>
              <p className='text'>Artist: {track.artist}</p>
              <p className='text'>Album: {track.album}</p>
              <p className='text'>Genre: {track.genre}</p>
              <p className='text'>BPM: {track.bpm}</p>
              <p className='text'>Key: {track.key}</p>
              <p className='text'>Duration: {track.duration}</p>
              <label className="checkbox-container">Downloaded
                <input
                  type="checkbox"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxClick(index)}
                />
                <span className="checkmark"></span>
              </label>
              <button className='delete' aria-label="Delete-Button" onClick={() => onDelete(track.id)}>Delete</button>
            </li>
          ))}
        </section>
      </ol>
    </div>
  );
}

Checklist.propTypes = {
  checklist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    bpm: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Checklist;
