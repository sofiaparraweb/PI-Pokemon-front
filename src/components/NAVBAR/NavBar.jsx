import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonName, getPokemons, getAllPokemons } from '../../redux/actions';
import SearchBar from '../SEARCHBAR/SearchBar';
import './NavBar.css';
import FilterSortButton from '../FILTERSORTBUTTON/FilterSortButton';

const NavBar = ({setPage}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {  
  console.log("Fetching Pokemons");
  dispatch(getPokemons());
  }, [dispatch]);

  const handleSearchSubmit = name => {
    setLoading(true);
    dispatch(getPokemonName(name));
    setName('');
  };

  const handleLogoClick = () => {
    dispatch(getAllPokemons()); // Llama a la acción para obtener todos los pokemons sin filtrar
  };
  
  return (
    <div className='NavBar'>
      <Link to='/' className="logo" onClick={handleLogoClick}>
        <img
          src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
          alt="Pokemon Logo"
        />
      </Link>
      <div className='searchBar'>
        <SearchBar handleSearchSubmit={handleSearchSubmit} />
      </div>
      <div className='buttons'>
        <FilterSortButton setPage={setPage}/>
      </div>
      <div>
        <Link to='/create' className="create">
          CREATE YOUR POKEMON
        </Link>
        <Link to='/about' className="about">
          <img
            src="https://cdn-icons-png.flaticon.com/512/16/16363.png"
            alt="About Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
