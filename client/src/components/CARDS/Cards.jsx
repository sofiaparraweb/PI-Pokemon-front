////ESTE COMPONENTE DEBE TOMAR UN ARRAY DE POKEMONS, 
//Y POR CADA POKEMON, RENDERIZAR UN COMPONENTE CARD
import React from 'react';
import Card from '../CARD/Card'
import './Cards.css';
import { useSelector } from 'react-redux';

const Cards = () => {

const pokemons = useSelector(state=>state.pokemons)

  return (
    <div className="cards-container">
      {pokemons.map(pokemon => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        );
      })}
    </div>
  );
};

export default Cards;
