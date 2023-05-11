import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByType, getPokemonsByOrder } from '../../redux/actions';

const FilterSortButtons = ({ handleTypeFilter, handleSortOrder }) => {
  const dispatch = useDispatch();

  const handleTypeButtonClick = (type) => {
    dispatch(getPokemonsByType(type));
    handleTypeFilter(type);
  };

  const handleSortButtonClick = (order) => {
    dispatch(getPokemonsByOrder(order));
    handleSortOrder(order);
  };

  return (
    <div>
      <button onClick={() => handleTypeButtonClick('fire')}>Fire</button>
      <button onClick={() => handleTypeButtonClick('water')}>Water</button>
      <button onClick={() => handleTypeButtonClick('grass')}>Grass</button>
      <button onClick={() => handleSortButtonClick('asc')}>Sort A-Z</button>
      <button onClick={() => handleSortButtonClick('desc')}>Sort Z-A</button>
    </div>
  );
};

export default FilterSortButtons;
