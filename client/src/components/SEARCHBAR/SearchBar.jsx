import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearchSubmit(searchTerm); // Envía el término de búsqueda al componente padre
    setSearchTerm('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <div className="searchContainer">
        <input type="text" placeholder="Search Pokemon..." value={searchTerm} onChange={handleInputChange} />
        <button type="submit">
          <img src="https://static.vecteezy.com/system/resources/previews/009/589/872/original/magnifying-icon-magnifying-clipart-transparent-free-png.png" alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
