//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS, GET_POKEMON_NAME, GET_POKEMON_DETAIL, GET_POKEMON_ORDER, GET_POKEMON_TYPE } from './action-types'

const initialState = {
    pokemons: []
};

const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_POKEMONS:
        return { ...state, pokemons: action.payload };
        case GET_POKEMON_NAME:
            return{ ...state, pokemons:action.payload};
            case GET_POKEMON_DETAIL:
                return { ...state, pokemonDetail: action.payload };
                case GET_POKEMON_ORDER:
                return {
        ...state,
        myFavorites: 
        action.payload === "Ascendente"
        ? state.allCharacters.sort((a, b) => a.id - b.id)
        : state.allCharacters.sort((a, b) => b.id - a.id)
    }
    default:
        return { ...state}
}

}

export default rootReducer;