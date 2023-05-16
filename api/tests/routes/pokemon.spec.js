const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'bulbasaur',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });

  describe('GET /pokemons/:idPokemon', () => {
    let newPokemon;
    
    before(async () => {
      newPokemon = await Pokemon.create(pokemon);
    });
  
    it('should get the details of a specific pokemon', async () => {
      const response = await agent.get(`/pokemons/1`);
  
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.name).to.equal(pokemon.name);
    });
  
    it('should return an error if the pokemon does not exist', async () => {
      const invalidId = 'invalidId';
      const response = await agent.get(`/pokemons/${invalidId}`);
  
      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal('Could not find the pokemon in the Data Base');
    });

  });
  

  describe('POST /pokemons', () => {
    it('should create a new pokemon', async () => {
      const newPokemon = {
        name: 'Charizard',
        image: 'charizard.png',
        life: 100,
        attack: 100,
        defense: 100,
        speed: 100,
        height: 1.7,
        weight: 90,
        type: ['Fire', 'Flying'],
      };
      const response = await agent.post('/pokemons').send(newPokemon);

      expect(response.status).to.equal(200);
      expect(response.body).to.equal(' Pokemon created ');
    });
  });

  describe('GET /types', () => {
    it('should get all the types', async () => {
      const response = await agent.get('/types');

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.above(0);
    });
  });
});
