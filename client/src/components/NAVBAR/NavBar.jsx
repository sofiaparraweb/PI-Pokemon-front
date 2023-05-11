import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonName, getPokemons } from '../../redux/actions';
import SearchBar from '../SEARCHBAR/SearchBar';
import FilterSortButtons from './FilterSortButton';
import './NavBar.css';

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
  
  function handleTypeFilter(type) {
    console.log(`Filter by ${type} clicked`);
  }

  function handleSortOrder(order) {
    console.log(`Sort ${order} clicked`);
  }

  return (
    <div className='NavBar'>
     <Link to='/home'>HOME</Link>
     <Link to='/create'>FORM</Link>
     <Link to='/about'>ABOUT</Link>
     <SearchBar 
        handleInputChange={handleInputChange} 
        handleSearchSubmit={handleSearchSubmit} />
     <FilterSortButtons
        handleTypeFilter={handleTypeFilter}
        handleSortOrder={handleSortOrder}
      />
    </div>
  );
}

export default NavBar;

