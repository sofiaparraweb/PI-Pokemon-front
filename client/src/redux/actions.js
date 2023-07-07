import axios from 'axios';
import {
  GET_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_NAME,
  FILTER_TYPE,
  FILTER_DBAPI,
  GET_POKEMON_TYPE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  GET_POKEMON_IMG,
} from './action-types';

export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('/pokemons');
      const pokemons = response.data;
      dispatch({ type: GET_POKEMONS, payload: pokemons });
    } catch (error) {
      console.log('Error fetching Pokemons:', error);
      throw new Error('Failed to fetch Pokemons');
    }
  };
};

export const getAllPokemons = () => {
  return { type: GET_ALL_POKEMONS };
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons/${id}`);
      const pokemonDetail = response.data;
      dispatch({ type: GET_POKEMON_DETAIL, payload: pokemonDetail });
    } catch (error) {
      console.log(`Error fetching Pokemon detail for ID ${id}:`, error);
      throw new Error('Failed to fetch Pokemon detail');
    }
  };
};

export const getPokemonName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/pokemons?name=${name}`);
      const pokemonName = response.data;
      dispatch({ type: GET_POKEMON_NAME, payload: pokemonName });
    } catch (error) {
      console.log(`Error fetching Pokemon name for "${name}":`, error);
      throw new Error('Failed to fetch Pokemon name');
    }
  };
};

export const getPokemonsByType = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/types`);
      const pokemonTypes = response.data.map((type) => type.name).join(",");
      dispatch({ type: GET_POKEMON_TYPE, payload: pokemonTypes });
    } catch (error) {
      console.log('Error fetching Pokemon types:', error);
      throw new Error('Failed to fetch Pokemon types');
    }
  };
};

export const getPokemonImages = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      const pokemonData = response.data.results;
     // Utiliza "Promise.all" para realizar múltiples solicitudes GET simultáneas para obtener las imágenes de los Pokémon
     const pokemonImages = await Promise.all(
      pokemonData.map(async (result) => {
        // Realiza una solicitud GET a la URL específica del Pokémon para obtener más detalles, incluyendo la imagen
        const pokemonResponse = await axios.get(result.url);
        // Retorna la URL de la imagen de los Pokémon en el formato deseado
        return pokemonResponse.data.sprites.other.dream_world.front_default;
      })
    );
      dispatch({ type: GET_POKEMON_IMG, payload: pokemonImages });
    } catch (error) {
      console.log('Error fetching Pokemon images:', error);
      throw new Error('Failed to fetch Pokemon images');
    }
  };
};

export const filterType = (value) => {
  return { type: FILTER_TYPE, payload: value };
};

export const filterDbApi = (value) => {
  return { type: FILTER_DBAPI, payload: value };
};

export const orderByAttack = (value) => {
  return { type: ORDER_BY_ATTACK, payload: value };
};

export const orderByName = (name) => {
  return { type: ORDER_BY_NAME, payload: name };
};
