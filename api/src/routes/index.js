const { Router } = require('express');
const getAllPokemons = require('../controllers/getAllPokemons')
const getDetail = require('../controllers/getDetail');
const createPokemon = require('../controllers/createPokemon');
const getTypes = require('../controllers/getTypes');

const router = Router();
//funciona
router.get('/pokemons', getAllPokemons);
//funciona
router.get('/pokemons/:idPokemon', getDetail);
//funciona
router.post('/pokemons', createPokemon);
//funciona
router.get('/types', getTypes);

module.exports = router;
