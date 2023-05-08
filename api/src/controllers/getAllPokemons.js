const { Pokemon, Type } = require('../db');
const axios = require("axios");
const { Op } = require('sequelize');

const getPokemonDetails = async (url) => {
  const pokemonData = await axios(url);

  return {
    id: pokemonData.data.id,
    name: pokemonData.data.name,
    image: pokemonData.data.sprites.front_default,
    life: pokemonData.data.stats.find(stat => stat.stat.name === "hp").base_stat,
    attack: pokemonData.data.stats.find(stat => stat.stat.name === "attack").base_stat,
    defense: pokemonData.data.stats.find(stat => stat.stat.name === "defense").base_stat,
    speed: pokemonData.data.stats.find(stat => stat.stat.name === "speed").base_stat,
    height: pokemonData.data.height,
    weight: pokemonData.data.weight,
    types: pokemonData.data.types.map(type => type.type.name),
  };
};

const getAllPokemons = async (req, res) => {
  const { name } = req.query;
  
  try {
    const api = await axios(`https://pokeapi.co/api/v2/pokemon?limit=200`);
    const pokemonApi = await Promise.all(api.data.results.map(async (pk) => {
      return await getPokemonDetails(pk.url);
    }));

    const dataBase = await Pokemon.findAll({
      include: [{
        model: Type,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }]
    });

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
        types: pk.types.map(obj => obj.name).join(', '),
      }
    });

    if(!name) {
      const allPokemons = [...pokemonApi, ...pokemonDb];
      res.json(allPokemons).status(200);
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
        through: { attributes: [] },
         }]
          });
          
    if(!byName) {
    byName = pokemonApi.find((pokemon) => {
      return pokemon.name === name.toLowerCase()}) 
    }
 
    res.status(200).json(byName)
  
  }
  } catch (error) {
    res.status(404).json('No se encontró el pokemon!!');
  }
}

module.exports = getAllPokemons;
