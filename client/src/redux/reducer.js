//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS, GET_POKEMON_NAME, GET_POKEMON_DETAIL, ORDER_BY_NAME, ORDER_BY_ATTACK} from './action-types'

const initialState = {
    pokemons: []
};

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_POKEMONS:
        return { ...state, pokemons: action.payload };
    case GET_POKEMON_NAME:
        return{ ...state, pokemons: action.payload};
    case GET_POKEMON_DETAIL:
        return { ...state, pokemon: action.payload };
        case ORDER_BY_ATTACK:
  const isAscending = action.payload === "asc";
  const sortedPokemons = [...state.pokemons].sort((a, b) => {
    const attackA = parseInt(a.attack);
    const attackB = parseInt(b.attack);
    if (isNaN(attackA) || isNaN(attackB)) {
      return 0;
    }
    if (isAscending) {
      return attackA - attackB;
    } else {
      return attackB - attackA;
    }
  });
  return {
    ...state,
    pokemons: sortedPokemons,
    order: action.payload,
  };
       
    case ORDER_BY_NAME:
        return { ...state, pokemons: action.payload };          
        default:
             return { ...state };
    }

}

export default rootReducer;