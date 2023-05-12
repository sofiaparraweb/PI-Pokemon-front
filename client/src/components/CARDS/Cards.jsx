////ESTE COMPONENTE DEBE TOMAR UN ARRAY DE POKEMONS, 
//Y POR CADA POKEMON, RENDERIZAR UN COMPONENTE CARD
import React, { useEffect} from 'react';
import Card from '../CARD/Card'
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';

const Cards = () => {

const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  console.log(pokemons)
if (!Array.isArray(pokemons)) {
return <div>Loading your pokemon...</div>;
}

  return (
    <div className="cards-container">
      {pokemons.map(pokemon => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types.join(", ")}
          />
        );
      })}
    </div>
  );
};

export default Cards;
