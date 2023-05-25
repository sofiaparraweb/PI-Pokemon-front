const { Router } = require('express');
const getAllPokemons = require('../controllers/getAllPokemons')
const getDetail = require('../controllers/getDetail');
const createPokemon = require('../controllers/createPokemon');
const getTypes = require('../controllers/getTypes');

const router = Router();

router.get('/pokemons', getAllPokemons);

router.get('/pokemons/:idPokemon', getDetail);

router.post('/pokemons', createPokemon);

router.get('/types', getTypes);

module.exports = router;
