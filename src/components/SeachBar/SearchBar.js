import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [search, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm); 
  };

  return (
    <form className='searchbar'>
      <input
        className='searchbar'
        type="text"
        placeholder="Search for a track..."
        value={search}
        onChange={handleSearchChange}
        aria-label="Search Bar"
      />
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
