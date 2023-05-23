//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS, GET_POKEMON_NAME, GET_POKEMON_DETAIL, ORDER_BY_NAME, ORDER_BY_ATTACK, FILTER_TYPE, GET_POKEMON_TYPE, FILTER_DBAPI, GET_POKEMON_IMG
} from './action-types'


const initialState = {
  pokemons: [],
  types: "",
  filteredPokemons: [],
  pokemonsDetail: {},
  apiPokemons: [], // Agrega esta línea
  userPokemons: [],
  loading: false, 
};


const rootReducer = (state = initialState, action) => {

  switch(action.type) {
  case GET_POKEMONS:
    return {
      ...state,
      pokemons: action.payload,
      apiPokemons: action.payload,
      filteredPokemons: action.payload,
      loading: false, 
    };

   case GET_POKEMON_NAME:
        return{ ...state, pokemons: action.payload};
    
   case GET_POKEMON_DETAIL:
        return { ...state, pokemonsDetail: action.payload };
  
        case ORDER_BY_ATTACK:
          const isAscendingAttack = action.payload === "asc";
          const sortedPokemonsAttack = [...state.pokemons].sort((a, b) => {
            const attackA = parseInt(a.attack);
            const attackB = parseInt(b.attack);
            if (isNaN(attackA) || isNaN(attackB)) {
              return 0;
            }
            if (isAscendingAttack) {
              return attackA - attackB;
            } else {
              return attackB - attackA;
            }
          });
          return {
            ...state,
            filteredPokemons: sortedPokemonsAttack,
            order: action.payload,
          };
    
        case ORDER_BY_NAME:
          const isAscendingName = action.payload === "asc";
          const sortedPokemonsName = [...state.pokemons].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return isAscendingName ? -1 : 1;
            }
            if (nameA > nameB) {
              return isAscendingName ? 1 : -1;
            }
            return 0;
          });
          return {
            ...state,
            filteredPokemons: sortedPokemonsName,
          };
    
        case FILTER_TYPE:
          const filteredPokemons = action.payload === ""
            ? state.pokemons
            : state.pokemons.filter((pokemon) => {
                if (action.payload === "All Types") {
                  return true; // Mostrar todos los Pokémon
                }
                return pokemon.types.includes(action.payload);
              });
    
          // Aplicar ordenamiento después de aplicar el filtro
          const { order } = state;
          let sortedFilteredPokemons = [...filteredPokemons];
          if (order === "asc" || order === "desc") {
            sortedFilteredPokemons = sortedFilteredPokemons.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
              if (nameA < nameB) {
                return order === "asc" ? -1 : 1;
              }
              if (nameA > nameB) {
                return order === "asc" ? 1 : -1;
              }
              return 0;
            });
          } else if (order === "ascAttack" || order === "descAttack") {
            sortedFilteredPokemons = sortedFilteredPokemons.sort((a, b) => {
              const attackA = parseInt(a.attack);
              const attackB = parseInt(b.attack);
              if (isNaN(attackA) || isNaN(attackB)) {
                return 0;
              }
              if (order === "ascAttack") {
                return attackA - attackB;
              } else {
                return attackB - attackA;
              }
            });
          }
    
          return {
            ...state,
            filteredPokemons: sortedFilteredPokemons,
          };

  case GET_POKEMON_TYPE:
    return { ...state, types: action.payload};


  case FILTER_DBAPI:
  if (action.payload !== 'all') {
    const filteredDbApi = state.apiPokemons.filter((pokemon) => {
      if (action.payload === 'API') {
        return !isNaN(pokemon.id); // Filtrar los Pokémon cuyo ID no sea NaN (provenientes de la API)
      }
      if (action.payload === 'DATABASE') {
        return isNaN(pokemon.id); // Filtrar los Pokémon cuyo ID sea NaN (provenientes de la base de datos)
      }
      return false;
    });
    return { ...state, filteredPokemons: filteredDbApi };
  }
  return { ...state, filteredPokemons: state.apiPokemons };

  
      case GET_POKEMON_IMG:
        return {
          ...state,
          types: action.payload,
        };

   default:
             return { ...state };
    }

}

export default rootReducer;