const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getTypes = async (req, res) => {
  try {
    let types = await Type.findAll();
    // Si no hay tipos en la base de datos, obtenerlos de la API
    if (types.length === 0) {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results.map((type) => ({
        name: type.name,
      }));
      types = await Type.bulkCreate(apiTypes);
    }
    res.json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getTypes;

