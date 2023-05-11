// la action nes la descripcion especiifca de lo  q tengo q hacer

import axios from 'axios'
import { GET_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_NAME, ORDER_ASC, ORDER_DES, GET_POKEMON_TYPE, FILTER, FILTER_DBAPI } from './action-types'

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
  

  export const OrderAsc = (id) => {
    return {
        type: ORDER_ASC, 
        payload: id 
}
  };

  export const OrderDes = (id) => {
    return {
        type: ORDER_DES,
        payload: id
    }
  }

  export const filter = (value) => {
    return { type: FILTER, payload:value}
}

export const filterDBAPI = (value) => {
    return { type: FILTER_DBAPI, payload:value}
}


  