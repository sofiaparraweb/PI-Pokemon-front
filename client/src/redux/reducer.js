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
  
  // inicializo distintos estados para despues no pisarme
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
        allPokemons: action.payload,
        loading: false,
      };

 case GET_ALL_POKEMONS: 
 // Nueva acción para obtener todos los pokemons sin filtrar
  // Actualiza el estado con todos los pokemons sin filtrar
        return {
        ...state,
        filteredPokemons: state.allPokemons,
        pokemons: state.allPokemons,
      };

    case GET_POKEMON_NAME:
      // Actualiza el estado con los pokemons filtrados por nombre
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_DETAIL:
      // Actualiza el estado con los detalles de un pokemon específico
      return { ...state, pokemonsDetail: action.payload };

    //utilizo sort para comparar uno a uno por ataque. parseInt para hacerlos numeros
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

   //utilizo sort para comparar uno a uno los nombres. toUpperCase para evitar errores 
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
      // Filtra los pokemons por tipo según el payload
      const filteredTypePokemons = action.payload === ""
        ? state.pokemons
        : state.pokemons.filter((pokemon) => {
          if (action.payload === "All Types") {
            // Si el payload es "All Types", se muestran todos los pokemons
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
    // Filtra los pokemons según el origen de los datos (API o Base de Datos)
    if (action.payload !== 'all') {
      const filteredDbApi = state.filteredPokemons.filter((pokemon) => {
        if (action.payload === 'API') {
          // Filtra los pokemons obtenidos de la API (cuyo ID no es un número)
          return isNaN(pokemon.id); 
        }
        if (action.payload === 'DATABASE') {
          // Filtra los pokemons obtenidos de la Base de Datos (cuyo ID es un número)
          return !isNaN(pokemon.id); 
        }
        return false;
      });
      if (!filteredDbApi.length) alert('No pokemons found with this filter');
      return { ...state, filteredPokemons: filteredDbApi };
    }
    // Si el payload es 'all', muestra todos los pokemons sin filtrar
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
