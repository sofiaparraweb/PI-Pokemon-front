const { Router } = require('express');
const getAllPokemons = require('../controllers/getAllPokemons')
const getDetail = require('../controllers/getDetail');
const getByName = require('../controllers/getByName');
const createPokemon = require('../controllers/createPokemon');
const getTypes = require('../controllers/getTypes');

const router = Router();
//funciona
router.get('/pokemons', getAllPokemons);
//funciona
router.get('/pokemons/:idPokemon', getDetail);

router.get('/pokemons/name', getByName);
//funciona
router.post('/pokemons', createPokemon);
//funciona
router.get('/types', getTypes);

module.exports = router;
