import {
  GET_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON_NAME,
  GET_POKEMON_DETAIL,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_TYPE,
  GET_POKEMON_TYPE,
  FILTER_DBAPI,
  GET_POKEMON_IMG,
} from './action-types';

const initialState = {
  allPokemons: [],
  pokemons: [],
  types: "",
  filteredPokemons: [],
  pokemonsDetail: {},
  userPokemons: [],
  loading: false,
  pokemonImages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
        allPokemons: action.payload,
        loading: false,
      };

 case GET_ALL_POKEMONS: // Nueva acción para obtener todos los pokemons sin filtrar
      return {
        ...state,
        filteredPokemons: state.allPokemons,
        pokemons: state.allPokemons,
      };

    case GET_POKEMON_NAME:
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_DETAIL:
      return { ...state, pokemonsDetail: action.payload };

    case ORDER_BY_ATTACK:
      const isAscendingAttack = action.payload === "asc";
      const sortedPokemonsAttack = [...state.filteredPokemons].sort((a, b) => {
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
      };

    case ORDER_BY_NAME:
      const isAscendingName = action.payload === "asc";
      const sortedPokemonsName = [...state.filteredPokemons].sort((a, b) => {
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
      const filteredTypePokemons = action.payload === ""
        ? state.pokemons
        : state.pokemons.filter((pokemon) => {
          if (action.payload === "All Types") {
          }
          return pokemon.types.includes(action.payload);
        });
      return {
        ...state,
        filteredPokemons: filteredTypePokemons
      };

    case GET_POKEMON_TYPE:
      return { ...state, types: action.payload };

    case FILTER_DBAPI:
      if (action.payload !== 'all') {
        const filteredDbApi = state.filteredPokemons.filter((pokemon) => {
          if (action.payload === 'API') {
            return !isNaN(pokemon.id); 
          }
          if (action.payload === 'DATABASE') {
            return isNaN(pokemon.id); 
          }
          return false;
        });
        if (!filteredDbApi.length) alert('No pokemons finded with this filter')
        return { ...state, filteredPokemons: filteredDbApi };
      }
      return { ...state, filteredPokemons: state.pokemons };

    case GET_POKEMON_IMG:
      return {
        ...state,
        pokemonImages: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
