import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByAttack, OrderByName, filterType, getPokemonsByType, filterDbApi} from '../../redux/actions';

function FilterSortButton() {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedOrigin, setSelectedOrigin] = React.useState('');

  useEffect(() => {
    dispatch(getPokemonsByType());
  }, [dispatch]);

  const handleOrderNameUP = () => {
    dispatch(OrderByName("Asc"));
  };
  
  const handleOrderNameDOWN = () => {
    dispatch(OrderByName("Desc"));
  };

  const handleOrderAttackUP = () => {
    dispatch(orderByAttack("asc"));
  };
  
  const handleOrderAttackDOWN = () => {
    dispatch(orderByAttack("desc"));
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
    <div>
      <button onClick={handleOrderAttackUP}>ATTACK UP</button>
      <button onClick={handleOrderAttackDOWN}>ATTACK DOWN</button>
      <button onClick={handleOrderNameUP}>NAME UP</button>
      <button onClick={handleOrderNameDOWN}>NAME DOWN</button>
      <select value={selectedType} onChange={handleFilterType}>
        <option value="">All Types</option>
        {types && types.split(',').map((type) => (
          <option key={type.trim()} value={type.trim()}>
            {type.trim()}
          </option>
        ))}
      </select>
      <select value={selectedOrigin} onChange={handleFilterDbApi}>
        <option value="">All Origins</option>
        <option value="API">API</option>
        <option value="DATABASE">BDD</option>
      </select>
    </div>
  );
}

export default FilterSortButton;
