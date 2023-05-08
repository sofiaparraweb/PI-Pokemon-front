const { Router } = require('express');
const getAllPokemons = require('../controllers/getAllPokemons')
const getDetail = require('../controllers/getDetail');
const getName = require('../controllers/getName');
const createPokemon = require('../controllers/createPokemon');
const getTypes = require('../controllers/getTypes');

const router = Router();
//funciona
router.get('/pokemons', getAllPokemons);
//funciona
router.get('/pokemons/:idPokemon', getDetail);

router.get('/pokemons/name', getName);

router.post('/pokemons', createPokemon);

router.get('/types', getTypes);

module.exports = router;
