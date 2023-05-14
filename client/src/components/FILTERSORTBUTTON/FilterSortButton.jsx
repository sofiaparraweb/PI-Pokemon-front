import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByAttack, OrderByName } from '../../redux/actions';

function FilterSortButton() {
  const dispatch = useDispatch();

  // const pokemons = useSelector(state => state.pokemons);
  // const types = useSelector(state => state.types)

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
  
  return (
    <div>
      <button onClick={handleOrderAttackUP}>ATTACK UP</button>
      <button onClick={handleOrderAttackDOWN}>ATTACK DOWN</button>
      <button onClick={handleOrderNameUP}>NAME UP</button>
      <button onClick={handleOrderNameDOWN}>NAME DOWN</button>
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