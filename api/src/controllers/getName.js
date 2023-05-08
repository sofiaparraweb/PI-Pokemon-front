const { Pokemon, Type } = require('../db');
const axios = require("axios");
const { Op } = require('sequelize');

const getName = async (req, res) => {

  const { name } = req.query;

  try {
    const db = await Pokemon.findAll({
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
        }
      }],
    });

    const pokemonsFromDb = db.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      life: pokemon.life,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.Types.map((type) => type.name).join(', '),
    }));


    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    
    const pokemonFromApi = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      life: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
      attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
      speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => type.type.name).join(', '),
    };

    const allPokemons = [...pokemonsFromDb, pokemonFromApi];

    if (allPokemons.length > 0) {
      return res.status(200).json(allPokemons);
    }

    return res.status(404).json({ error: `No se encontró ningún Pokémon con el nombre '${name}'` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getName;
