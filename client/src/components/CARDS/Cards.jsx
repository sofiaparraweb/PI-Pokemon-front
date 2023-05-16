////ESTE COMPONENTE DEBE TOMAR UN ARRAY DE POKEMONS, 
//Y POR CADA POKEMON, RENDERIZAR UN COMPONENTE CARD
import React, { useEffect, useState} from 'react';
import Card from '../CARD/Card'
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import Pagination from '../PAGINATION/Pagination';

const Cards = () => {

const dispatch = useDispatch();
const pokemons = useSelector(state => state.pokemons);
const filteredPokemons = useSelector(state => state.filteredPokemons);

const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(12);

const max = Math.ceil(pokemons.length/perPage);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

if (!Array.isArray(pokemons)) {
return <div>Loading your pokemon...</div>;
}

  return (
    <div>
    <div className="cards-container">
      {(filteredPokemons.length > 0 ? filteredPokemons : pokemons)
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemon) => {
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
            types={pokemon.types}
          />
        );
      })}
    </div>
    <div>
      <Pagination page={page} setPage={setPage} max={max}/>
    </div>
    </div>
  );
};

export default Cards;

