// la action nes la descripcion especiifca de lo  q tengo q hacer

import axios from 'axios'
import { GET_POKEMONS, GET_ALL_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_NAME, FILTER_TYPE, FILTER_DBAPI, GET_POKEMON_TYPE, ORDER_BY_NAME, ORDER_BY_ATTACK, GET_POKEMON_IMG 
} from './action-types'

export const getPokemons = () => {
    return async function (dispatch) { 
        const apiData = await axios.get(`http://localhost:3001/pokemons`)
    
    const pokemons = apiData.data;
    dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

export const getAllPokemons = () => {
  return async function (dispatch) {
  dispatch({type: GET_ALL_POKEMONS})  
}}

export const getPokemonDetail = (id) => {
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);

        const pokemonDetail = apiData.data;
        dispatch({ type: GET_POKEMON_DETAIL, payload: pokemonDetail});
    }
}

export const getPokemonName = (name) => {
    return async function (dispatch) { 
      try { 
    const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    const pokemonName = apiData.data;
    dispatch({ type: GET_POKEMON_NAME, payload: pokemonName});
}
catch(error) {
  console.log(error.pokemonName)
  alert(error.pokemonName)
}
}
}

export const getPokemonsByType = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/types`);
    const pokemonTypes = apiData.data.map((type) => type.name).join(",");
    dispatch({ type: GET_POKEMON_TYPE, payload: pokemonTypes });
  };
};

export const getPokemonImages = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonData = response.data.results;
      const pokemonImages = await Promise.all(
        pokemonData.map(async (result) => {
          const pokemonResponse = await axios.get(result.url);
          return pokemonResponse.data.sprites.other.dream_world.front_default;
        }) 
      );
      dispatch({ type: GET_POKEMON_IMG, payload: pokemonImages });
    } catch (error) {
      console.log('Error fetching Pokemon images:', error);
    }
  };
};

  export const filterType = (value) => {
    return { type: FILTER_TYPE, payload:value}
}

  export const filterDbApi = (value) => {
    return { type: FILTER_DBAPI, payload:value}
}

export const orderByAttack = (value) => {
  return { type: ORDER_BY_ATTACK, payload: value };
};

export const orderByName = (name) => {
    return { type: ORDER_BY_NAME, payload: name }
}




  