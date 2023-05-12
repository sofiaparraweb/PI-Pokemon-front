import { Link } from 'react-router-dom'
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

  useEffect (()=>{
      dispatch(getPokemons());
  }, [dispatch]);

  function handleInputChange(event){
      setName(event.target.value);
  }

  function handleSearchSubmit(event){
      event.preventDefault();
      dispatch(getPokemonName(name));
      setName('');
  }
  
  return (
    <div className='NavBar'>
     <Link to='/home'>HOME</Link>
     <Link to='/create'>FORM</Link>
     <Link to='/about'>ABOUT</Link>
     <FilterSortButton />
     <SearchBar 
        handleInputChange={handleInputChange} 
        handleSearchSubmit={handleSearchSubmit} />
    </div>
  );
}

export default NavBar;

