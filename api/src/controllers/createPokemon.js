const { Pokemon, Type } = require('../db');
const axios = require("axios");

const createPokemon = async (req, res) => {
  try {
    // Desestructurar los datos enviados
    const { name, image, life, attack, defense, speed, height, weight, type } = req.body;

    // Si el tipo enviado es un arreglo, se realiza una búsqueda de cada tipo en la bdd
    const arreTypes = Array.isArray(type) ?
      await Promise.all(type.map(async (t) => {
        return await Type.findOne({ where: { name: t } });
      })) : [];

    // Creo el nuevo Pokémon en la base de datos utilizando el modelo "Pokemon"
    let newPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight, type });

    // Asocio el Pok
    newPokemon.addType(arreTypes);

    // Respuesta OK
    res.status(200).json(" Pokemon created ");
  } catch (error) {
    // Si ocurre error durante el proceso, se envía una respuesta error
    res.status(404).json({ error: error.message });
  }
}

module.exports = createPokemon;
