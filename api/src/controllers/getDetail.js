const { Pokemon, Type } = require('../db')
const axios = require('axios')

const getDetail = async (req, res) => {
  const { idPokemon } = req.params;

  try {
  
    if (isNaN(idPokemon)) {
     
     const pokemonFromDb = await Pokemon.findByPk(idPokemon, {
      include:{
        model:Type,
        attribute: ["name"],
        through: { attribute:[] } },
    attribute: { exclude:['Types'] }
});
      
      if (pokemonFromDb) {
        // Formatear respuesta para devolver al usuario
        const formattedPokemon = {
          id: pokemonFromDb.id,
          name: pokemonFromDb.name,
          image: pokemonFromDb.image,
          life: pokemonFromDb.life,
          attack: pokemonFromDb.attack,
          defense: pokemonFromDb.defense,
          speed: pokemonFromDb.speed,
          height: pokemonFromDb.height,
          weight: pokemonFromDb.weight,
          types: pokemonFromDb.types.map((type) => type.name).join(', '),
        };

        return res.status(200).json(formattedPokemon);
      }

      // Si no se encontró en la base de datos, devolver un error
return res.status(404).json({ error: 'Could not find the pokemon in the Data Base' });
    }

    // Buscar en la API
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

    const formattedPokemon = {
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

    res.status(200).json(formattedPokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDetail;
