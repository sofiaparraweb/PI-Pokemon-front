import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonName, getPokemons } from '../../redux/actions';
import SearchBar from '../SEARCHBAR/SearchBar';
import './NavBar.css';
import FilterSortButton from '../FILTERSORTBUTTON/FilterSortButton';

const NavBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect (() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    dispatch(getPokemonName(name));
    setName('');
  }
  
  return (
    <div className='NavBar'>
      <Link to='/home' className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon Logo"
        />
      </Link>
      <div className="navLinks">
        <Link to='/create'>FORM</Link>
        <Link to='/about'>ABOUT</Link>
        <FilterSortButton />
      </div>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default NavBar;
