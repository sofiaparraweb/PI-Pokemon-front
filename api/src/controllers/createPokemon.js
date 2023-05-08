const { Pokemon, Type } = require('../db');
const axios = require("axios");

const createPokemon = async (req, res) => {
    try {
        //Desestructuro lo que viene como parametro
        const { name, image, life, attack, defense, speed, height, weight, type } = req.body;
        
        const arreTypes = Array.isArray(type) ?
        await Promise.all(type.map(async(t)=>{
            return await Type.findOne({ where: { name: t } });
        })) : [];

        //Se crea el pokemon nuevo
        let newPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight, type });
        
        //Asocia el pokemon con el tipo enviado anteriormente
        newPokemon.addType(arreTypes);

        res.status(200).json(newPokemon);
    }
    catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = createPokemon;