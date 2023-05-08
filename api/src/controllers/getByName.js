/*const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getByName = async (req, res) => {
  const { name } = req.query;

  try {
    const dataBase = await Pokemon.findAll({
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

    const pokeDataBase = dataBase.map((db) => {
      return {
        id: db.id,
        name: db.name,
        image: db.image,
        life: db.life,
        attack: db.attack,
        defense: db.defense,
        speed: db.speed,
        height: db.height,
        weight: db.weight,
        types: db.types.map((type) => type.name).join(', '),
      }
    });

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    
    const pokeApi =  { 
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

    const response = [...pokeDataBase, pokeApi];

    if (response.length) {
      return res.status(200).json(response);
    }

    return res.status(404).json({ error: `No se encontró ningún Pokémon con el nombre '${name}'` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getByName;
*/
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getByName = async (req, res) => {
  const { name } = req.query;

  try {
    const dataBase = await Pokemon.findAll({
      include: [{
        model: Type,
        attributes: ['name'],
        through: { attributes: [] },
      }]
    });

    const pokeDataBase = dataBase.map((db) => {
      return {
        id: db.id,
        name: db.name,
        image: db.image,
        life: db.life,
        attack: db.attack,
        defense: db.defense,
        speed: db.speed,
        height: db.height,
        weight: db.weight,
        types: db.types.map((type) => type.name).join(', '),
      }
    });

    const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const pokeApi = {
      id: api.data.id,
      name: api.data.name,
      image: api.data.sprites.front_default,
      life: api.data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
      attack: api.data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: api.data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
      speed: api.data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      height: api.data.height,
      weight: api.data.weight,
      types: api.data.types.map((type) => type.type.name).join(', '),
    };

    const response = [...pokeDataBase, pokeApi];
    const responseClean = response.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))

    if (responseClean.length) {
      return res.status(200).json(responseClean);
    }

    return res.status(404).json({ error: `No se encontró ningún Pokémon con el nombre '${name}'` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getByName;

