const { Type } = require('../db');
const axios = require('axios');

const getTypes = async (req, res) => {
  try {
    let types = await Type.findAll();
    // Si no hay tipos en la base de datos, obtenerlos de la API
    if (types.length === 0) {
      // Realizar solicitud a la API para obtener los tipos
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results.map((type) => ({
        name: type.name,
      }));
      // Crear los tipos en la base de datos utilizando el método bulkCreate de Sequelize
      types = await Type.bulkCreate(apiTypes);
    }
    // Devolver los tipos al cliente
    res.json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getTypes;
