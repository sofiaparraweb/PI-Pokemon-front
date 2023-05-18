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
          src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
          alt="Pokemon Logo"
        />
      </Link>
      <div className='searchBar'>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
        </div> 
      <div className='buttons'>
      <FilterSortButton />
      </div>
      <div className="navLinks">
        <Link to='/create'>CREATE YOUR POKEMON</Link>
        <Link to='/about'>ABOUT</Link>
      </div>
    </div>
  
  );
}
export default NavBar;

