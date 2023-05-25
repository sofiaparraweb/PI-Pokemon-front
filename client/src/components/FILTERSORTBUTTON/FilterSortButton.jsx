import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByAttack, orderByName, filterType, getPokemonsByType, filterDbApi, getAllPokemons } from '../../redux/actions';
import './FilterSortButton.css';

function FilterSortButton({setPage}) {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedOrigin, setSelectedOrigin] = React.useState('');
  const userPokemons = useSelector(state => state.userPokemons);
 
  useEffect(() => {
    dispatch(getPokemonsByType());
  }, [dispatch]);

  const handleOrderAttackUP = () => {
    dispatch(orderByAttack("asc"));
    setPage(1);
  };

  const handleOrderAttackDOWN = () => {
    dispatch(orderByAttack("desc"));
    setPage(1);
  };

  const handleOrderNameUP = () => {
    dispatch(orderByName("asc"));
    setPage(1)
  };

  const handleOrderNameDOWN = () => {
    dispatch(orderByName("desc"));
    setPage(1)
  };

  const handleFilterType = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    dispatch(filterType(type));
    setPage(1)
  };

  const handleFilterDbApi = (event) => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
    dispatch(filterDbApi(origin));
    setPage(1)
  };

  const deleteFilters = () => {
    setSelectedType('');
    setSelectedOrigin('');
    dispatch(getAllPokemons());
    setPage(1);
  }

  return (
    <div className="FilterSortButton">
      <h2>FILTERS:</h2>
      <h3>TYPE</h3>
      <select value={selectedType} onChange={handleFilterType} className='buttonType'>
        <option value="">All Types</option>
        {types && types.split(',').map((type) => (
          <option key={type.trim()} value={type.trim()}>
            {type.trim()}
          </option>
        ))}
      </select>
      <h3>ORIGIN</h3>
      <select value={selectedOrigin} onChange={handleFilterDbApi} className='buttonOrigin'>
        <option value="">All Origins</option>
        <option value="API">ORIGINALS</option>
        <option value="DATABASE">CREATED BY YOU</option>
      </select>
      <h3>BY ATTACK</h3>
      <div className="buttonAttack">
      <button onClick={handleOrderAttackDOWN}>+</button>
        <button onClick={handleOrderAttackUP}>-</button>
      </div>
      <h3>BY NAME</h3>
      <div className="buttonName">
        <button onClick={handleOrderNameUP}>A-Z</button>
        <button onClick={handleOrderNameDOWN}>Z-A</button>
      </div>
      <div className='buttonDelete'>
        <button onClick={deleteFilters}>DELETE FILTERS</button>
      </div>
    </div>
  );
}

export default FilterSortButton;
