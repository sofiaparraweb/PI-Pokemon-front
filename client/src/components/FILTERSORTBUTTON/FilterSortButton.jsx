import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByAttack } from '../../redux/actions';
import { useSelector } from 'react-redux';

function FilterSortButton() {
  const dispatch = useDispatch();

  const pokemons = useSelector(state => state.pokemons);

  console.log(pokemons)
  // const handleFilterDBAPI = () => {
  //   dispatch(filterDBAPI());
  // };

  // const handleFilterType = () => {
  //   dispatch(filterType());
  // };

  // const handleOrderByName = () => {
  //   dispatch(orderByName());
  // };

  const handleOrderAttackUP = () => {
    dispatch(orderByAttack("asc"));
  };
  
  const handleOrderAttackDOWN = () => {
    dispatch(orderByAttack("desc"));
  };  
  
  return (
    <div>
      {/* <button onClick={handleFilterDBAPI}>API</button>
      <button onClick={handleFilterType}>DB</button>
      <button onClick={handleOrderByName}>Order by Name</button> */}
      <button onClick={handleOrderAttackUP}>ATTACK UP</button>
      <button onClick={handleOrderAttackDOWN}>ATTACK DOWN</button>
    </div>
  );
}

export default FilterSortButton;



// Botones/Opciones para filtrar por tipo, y por si su 
// origen es de la API o de la base de datos (creados por 
// nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente 
// como descendentemente los pokemones por orden alfabético 
// y por ataque.