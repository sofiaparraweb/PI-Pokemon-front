import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByAttack, OrderByName, filterType, getPokemonsByType, filterDbApi} from '../../redux/actions';
import './FilterSortButton.css';

function FilterSortButton() {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedOrigin, setSelectedOrigin] = React.useState('');

  useEffect(() => {
    dispatch(getPokemonsByType());
  }, [dispatch]);

  const handleOrderAttackUP = () => {
    dispatch(orderByAttack("asc"));
  };
  
  const handleOrderAttackDOWN = () => {
    dispatch(orderByAttack("desc"));
  };

  const handleOrderNameUP = () => {
    dispatch(OrderByName("Asc"));
  };
  
  const handleOrderNameDOWN = () => {
    dispatch(OrderByName("Desc"));
  };

  const handleFilterType = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    dispatch(filterType(type));
  };

  const handleFilterDbApi = (event) => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
    dispatch(filterDbApi(origin));
  };  

  return (
    <div className="FilterSortButton">
      <div className="section">
        <h3>BY ATTACK</h3>
        <div className="buttons">
          <button onClick={handleOrderAttackUP}>&uarr;</button>
          <button onClick={handleOrderAttackDOWN}>&darr;</button>
        </div>
      </div>
      <div className="section">
        <h3>BY NAME</h3>
        <div className="buttons">
          <button onClick={handleOrderNameUP}>&uarr;</button>
          <button onClick={handleOrderNameDOWN}>&darr;</button>
        </div>
      </div>
      <div className="section">
        <h3>ORIGIN</h3>
        <select value={selectedOrigin} onChange={handleFilterDbApi}>
          <option value="">All Origins</option>
          <option value="API">API</option>
          <option value="DATABASE">BDD</option>
        </select>
      </div>
      <div className="section">
        <h3>TYPE</h3>
        <select value={selectedType} onChange={handleFilterType}>
          <option value="">All Types</option>
          {types && types.split(',').map((type) => (
            <option key={type.trim()} value={type.trim()}>
              {type.trim()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterSortButton;
