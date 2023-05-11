import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleInputChange, handleSearchSubmit }) => {

  return (
    <form onSubmit={handleSearchSubmit} className="SearchBar">
      <input type="text" placeholder="Search Pokemon..." onChange={handleInputChange} />
      <button type="submit">
        <img src="https://static.vecteezy.com/system/resources/previews/009/589/872/original/magnifying-icon-magnifying-clipart-transparent-free-png.png" alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;