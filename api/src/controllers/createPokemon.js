const { Pokemon, Type } = require('../db');
const axios = require("axios");
require('dotenv').config();
const { URL_BASE} = process.env;

const createPokemon= async (req, res) => {

 const { name, image, life, attack, defense } = req.body;
 
    /*try {
        const razas = await axios.get(`${URL_BASE}/v1/breeds?key=${API_KEY}`)
        const razasOnly = razas.data.map((raza) => {
            return {
                id: raza.id,
                name: raza.name,
                height: raza.height.imperial,
                weight: raza.weight.imperial,
                life_span: raza.life_span,
                image: raza.image.url,
                temperaments: raza.temperament,

            }
        })

        const dogs = await Dog.findAll({
            include: [{
                model: Temperaments,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        });

        const cleanDogs = dogs.map((raza) => {
            return {
                id: raza.id,
                name: raza.name,
                height: raza.height,
                weight: raza.weight,
                life_span: raza.life_span,
                image: raza.image,
                temperaments: raza.temperaments.map(obj => obj.name).join(', '),

            }
        });

        const response = [...cleanDogs, ...razasOnly]
        const verificarName = response.filter((dog) => dog.name.toLowerCase() === name.toLowerCase());
        if (verificarName.length !== 0) return res.status(400).json({ error: "Ya exite la raza" });

        const dog = await Dog.create({ name, height, weight, life_span, image });

        dog.addTemperament(temperament);
        res.status(200).json(dog);

    } catch (error) {

        console.log(error.message);

    }
*/
}

module.exports = createPokemon;