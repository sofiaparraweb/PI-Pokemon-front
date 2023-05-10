// EL ESTADO GLO BAL ES UN OBEJTO

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//esta linea sirve para conectar nuestra app con la extension REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    //esta linea sirve para que podamos hacer peticiones a una Api/servdior
);

export default store;
