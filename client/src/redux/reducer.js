//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS, GET_POKEMON_NAME, GET_POKEMON_DETAIL, ORDER_BY_NAME, ORDER_BY_ATTACK, FILTER_TYPE, GET_POKEMON_TYPE, 
  //GET_POKEMON_IMG
} from './action-types'


const initialState = {
    pokemons: [],
    types: "",
    filteredPokemons: [],
    pokemonsDetail: {},
  };

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_POKEMONS:
        return { ...state, pokemons: action.payload };
    case GET_POKEMON_NAME:
        return{ ...state, pokemons: action.payload};
    case GET_POKEMON_DETAIL:
        return { ...state, pokemonsDetail: action.payload };
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
    const pokemonsName = [...state.pokemons].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return action.payload === "Asc" ? -1 : 1;
      }
      if (nameA > nameB) {
        return action.payload === "Asc" ? 1 : -1;
      }
      return 0;
    });
    return {
      ...state,
      pokemons: pokemonsName,
    };
    
    case GET_POKEMON_TYPE:
      return { ...state, types: action.payload};

      case FILTER_TYPE:
  const filteredPokemons = action.payload === ""
    ? state.pokemons
    : state.pokemons.filter((pokemon) => {
        if (action.payload === "All Types") {
          return true; // Mostrar todos los Pokémon
        }
        return pokemon.types.includes(action.payload);
      });
  return {
    ...state,
    filteredPokemons,
  };

      // case GET_POKEMON_IMG:
      //   return {
      //     ...state,
      //     types: action.payload,
      //   };

   default:
             return { ...state };
    }

}

export default rootReducer;