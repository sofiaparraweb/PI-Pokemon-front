const { Pokemon, Type } = require('../db'); 
const axios = require("axios"); 
const { Op } = require('sequelize');  

// Función para obtener los detalles de un Pokémon desde una URL
const getPokemonDetails = async (url) => {
  try {
    const pokemonData = await axios.get(url);  // Obtener los datos del Pokémon desde la URL
    const data = pokemonData.data;  // Extraer la información del Pokémon

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      life: data.stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: data.stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: data.stats.find((stat) => stat.stat.name === "defense").base_stat,
      speed: data.stats.find((stat) => stat.stat.name === "speed").base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name),
    };
  } catch (error) {
    throw new Error(`Failed to fetch Pokemon details from ${url}`);
  }
};

// Función para obtener todos los Pokémon
const getAllPokemons = async (req, res) => {
  const { name } = req.query;  // Obtener el parámetro de consulta 'name'

  try {
    const apiResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');  // Obtener la lista de Pokémon desde la API externa
    const pokemonApi = await Promise.all(apiResponse.data.results.map(async (pk) => {
      return await getPokemonDetails(pk.url);  // Obtener los detalles de cada Pokémon desde su URL correspondiente
    }));

    const dataBase = await Pokemon.findAll({
      include: [{
        model: Type,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }]
    });  // Obtener los Pokémon almacenados en la base de datos

    const pokemonDb = dataBase.map((pk) => {
      return {
        id: pk.id,
        name: pk.name,
        image: pk.image,
        life: pk.life,
        attack: pk.attack,
        defense: pk.defense,
        speed: pk.speed,
        height: pk.height,
        weight: pk.weight,
        types: pk.types.map((obj) => obj.name).join(', '),
      };
    });  // Mapear los Pokémon de la base de datos para obtener los datos necesarios

    if (!name) {
      const allPokemons = [...pokemonApi, ...pokemonDb];  // Combinar los Pokémon de la API y de la base de datos
      res.status(200).json(allPokemons);  // Responder con la lista completa de Pokémon
    } else {
      let byName = await Pokemon.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: [{
          model: Type,
          attributes: ['name'],
          through: {
            attributes: []
          },
        }],
      });  // Buscar un Pokémon en la base de datos que coincida con el nombre proporcionado

      if (!byName) {
        byName = pokemonApi.find((pokemon) => {
          return pokemon.name === name.toLowerCase();
        });  // Buscar un Pokémon en la lista de la API que coincida con el nombre proporcionado
      }

      if (!byName) {
        return res.status(404).json(`No pokemon found with the name ${name}`);  // Responder con un mensaje de error si no se encuentra ningún Pokémon
      }

      res.status(200).json(byName);  // Responder con el Pokémon encontrado
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Internal server error');  // Responder con un mensaje de error en caso de problemas en el servidor
  }
};

module.exports = getAllPokemons;  // Exportar la función para que pueda ser utilizada por otros archivos
