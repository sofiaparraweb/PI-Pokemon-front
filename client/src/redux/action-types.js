export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_DBAPI = 'FILTER_DBAPI';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const GET_POKEMON_TYPE = 'GET_POKEMON_TYPE';
export const GET_POKEMON_IMG = 'GET_POKEMON_IMG'

// Botones/Opciones para filtrar por tipo, y por si su 
// origen es de la API o de la base de datos (creados por 
// nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente 
// como descendentemente los pokemones por orden alfabético 
// y por ataque.

// estoy haciendo una app con react redux. uso Javascript. Tengo tambien un back end desarollado. Mis endpoints para eso son
// /pokemons --- me trae todos
// /pokemons?name== --- si le traigo un name por query me lo devuelve
// /types --- me devuelve todos los tipos de pokemon
// /pokemon/:idPokemon --- me trae el pokemon con el mismo id
// /pokemons -- tambien tengo una ruta tipo post donde puedo crear un pokemonm

// en mi front tengo componentes y una carpeta redux con mis actions y mi reducer

// Mis compoenntes son 
// CARD -- renderiza una card con UN pokemons. El nombre tiene un link al componente DETAIL
// CARDS-- renderiza todos los cards individuales en mi compoennte home
// NAVBAR -- renderiza una navBar q incluye links a otras views y en ella la search bar
// SearcBar --- aparece en NavBar y tiene la funcion de buscar un pokemon con su nombre
// Create --- formulario para crear un pokemon, con un boton submit que lo sube a la base de datos y despues lo muestra en home
// Detail --- muetsra el detalle de una Card especifica (deberia utilizar la ruta /pokemons/:idPokemon
//HOME -- tienen todos los pokemons que traigo de la api. Renderiza las cards

// Tambien tengo un reducer y actions..... ahora puedo empezar a hacer preguntas>? necesitas mas datos para ponerte en contexto?