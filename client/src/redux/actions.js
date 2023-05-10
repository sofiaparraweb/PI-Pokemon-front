// la action nes la descripcion especiifca de lo  q tengo q hacer

import axios from 'axios'
import { GET_POKEMONS } from './action-types'
// GET_POKEMON, CREATE_POKEMON, GET_TYPES
export const getPokemons = () => {
    return async function (dispatch) { 
        const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200`)
    
    const pokemons = apiData.data;
    dispatch({type: GET_POKEMONS, payload: pokemons})
    }
}

// export const getPokemon = (idPokemon) => {
//     return async function (dispatch) { 
//         const apiData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200/${idPokemon}`)
    
//     const pokemon = apiData.data;
//     dispatch({type: GET_POKEMON, payload: pokemon})
//     }
// }

