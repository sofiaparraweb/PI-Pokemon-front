//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS, GET_POKEMON_NAME, GET_POKEMON_DETAIL, GET_POKEMON_TYPE, ORDER_ASC, ORDER_DES } from './action-types'

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
        return { ...state, pokemonDetail: action.payload };
    case ORDER_ASC:
        return { ...state, pokemons: state.pokemons.sort((a,b)=>a.name.localeCompare(b.name)) };
    case ORDER_DES:
        return { ...state, pokemons: state.pokemons.sort((a,b)=>b.name.localeCompare(a.name)) };
    // case FILTER:
    //         if (action.payload !== "todos"){
    //             const pokemonesFilter = pokemonesDos.filter((pokemon)=>{
    //                 if(!pokemon.type.length){
    //                     if (pokemon.type === action.payload)return true;
    //                     else return false;
    //                 }
    //                 else {
    //                     let i=0;
    //                     while(i<pokemon.type.length){
    //                         if (pokemon.type[i] === action.payload) return true;
    //                         else i++;
    //                     }
    //                     return false;
    //                 }
    
    //             })
    //             return { ...state, pokemones: pokemonesFilter }
    //         }
    //         else{
    //             return { ...state, pokemones: pokemonesDos }
    //         }

    // case FILTERBDDAPI:
    //         if(action.payload !== 'todos'){
    //             const pokemonesFilterBDD = pokemonesDos.filter((pokemon)=>{
    //                 if(action.payload === 'API'){
    //                     if(!isNaN(pokemon.id)) return true;
    //                     else return false;
    //                 }
    //                 if(action.payload === 'BaseDeDatos'){
    //                     if(isNaN(pokemon.id)) return true;
    //                     else return false;
    //                 }
    //                 else return false;
    //             })
    //             return { ...state, pokemones: pokemonesFilterBDD }
    //         }
    //         return { ...state, pokemones: pokemonesDos}

    //     case GET_TYPES:
    //         return { ...state, types: action.payload };
    //     case CREATE_POKEMON:
    //         return { ...state, pokemones: action.payload };
        default:
             return { ...state };
    }

}

export default rootReducer;