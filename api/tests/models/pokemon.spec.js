const { Pokemon, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => {
    return conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  });

  beforeEach(() => {
    return Pokemon.sync({ force: true });
  });

  describe('Validators', () => {
    it('should throw an error if name is null', (done) => {
      Pokemon.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('should work when its a valid name', () => {
      Pokemon.create({ name: 'Pikachu' });
    });
  });
});

describe('Type model', () => {
  before(() => {
    return conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  });

  beforeEach(() => {
    return Type.sync({ force: true });
  });

  describe('Validators', () => {
    it('should throw an error if name is null', (done) => {
      Type.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });

    it('should work when its a valid name', () => {
      Type.create({ name: 'Fire' });
    });
  });
});
