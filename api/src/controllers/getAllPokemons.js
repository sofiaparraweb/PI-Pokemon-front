const { Pokemon, Type } = require('../db');
const axios = require("axios");

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
  try {
    const api = await axios(`https://pokeapi.co/api/v2/pokemon?limit=200`);
    const pokemonDetails = await Promise.all(api.data.results.map(async (pk) => {
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

    const allPokemons = [...pokemonDetails, ...pokemonDb];

    res.json(allPokemons).status(200);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getAllPokemons;
