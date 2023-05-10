//unico autorizado a cambiar el estado golbal!!!
//pero tengo que darle info!!
// reducerr... hace esto
// y ahi el reducer va y lo cambia
// la info no es mas que las actions
import { GET_POKEMONS } from './action-types'

const initialState = {
    pokemons: []
};


const rootReducer = (state = initialState, action) => {
switch(action.type) {
    case GET_POKEMONS:
        return { ...state, pokemons: action.payload };
    default:
        return { ...state}
}
}

export default rootReducer;