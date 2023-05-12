// la action nes la descripcion especiifca de lo  q tengo q hacer

import axios from 'axios'
import { GET_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_NAME, FILTER_TYPE, FILTER_DBAPI, GET_POKEMON_TYPE, ORDER_BY_NAME, ORDER_BY_ATTACK } from './action-types'

export const getPokemons = () => {
    return async function (dispatch) { 
        const apiData = await axios.get(`http://localhost:3001/pokemons`)
    
    const pokemons = apiData.data;
    dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

export const getPokemonDetail = (id) => {
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);

        const pokemonDetail = apiData.data;
        dispatch({ type: GET_POKEMON_DETAIL, payload: pokemonDetail});
    }
}

export const getPokemonName = (name) => {
    return async function (dispatch) { 
    const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    const pokemonName = apiData.data;
    dispatch({ type: GET_POKEMON_NAME, payload: pokemonName});
}
}

export const getPokemonsByType = () => {
    return async function (dispatch) {
      const apiData = await axios.get(`http://localhost:3001/type`);
      const pokemonType = apiData.data;
      dispatch({ type: GET_POKEMON_TYPE, payload: pokemonType });
    };
  };
  
  export const filterType = (value) => {
    return { type: FILTER_TYPE, payload:value}
}

  export const filterDBAPI = (value) => {
    return { type: FILTER_DBAPI, payload:value}
}

export const orderByAttack = (value) => {
  return { type: ORDER_BY_ATTACK, payload: value };
};

export const OrderByName = (name) => {
    return { type: ORDER_BY_NAME, payload: name }
}



  