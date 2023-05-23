import React, { useEffect, useState } from 'react';
import Card from '../CARD/Card';
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import Pagination from '../PAGINATION/Pagination';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const filteredPokemons = useSelector(state => state.filteredPokemons);
  const loading = useSelector(state => state.loading); 
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const max = Math.ceil(filteredPokemons.length / perPage);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);


  if (loading || pokemons.length === 0) {
    // Si se está cargando, mostrar la imagen giratoria de la Poké Ball y el mensaje
    return (
      <div className="loading-container">
      <img src="https://cdn-icons-png.flaticon.com/512/6356/6356630.png" alt="Loading Pokeball" className="loading-image" />
      <p className="loading-text">POKEMONS ARE ARRIVING HOME...</p>
    </div>
    
    );
  }

  if (!Array.isArray(pokemons)) {
    if (typeof pokemons === 'object' && Object.keys(pokemons).length > 0) {
      // Si pokemons es un objeto y tiene datos, significa que se recibió un único pokemon
      const { id, name, image, attack, defense, speed, height, weight, types } = pokemons;
      return (
        <div className='pokemon-container'>
          <div className='pokemon-selected'>
            <Card 
              key={id}
              id={id}
              name={name}
              image={image}
              attack={attack}
              defense={defense}
              speed={speed}
              height={height}
              weight={weight}
              types={types}
              className="card-selected"
            />
          </div>
        </div>
      );
    } else {
      // Si no es un array ni un objeto con datos, se muestra el mensaje de carga
      console.log('pokemons:', pokemons);
      return <div>Loading your pokemon...</div>;
    }
  }
  
  return (
    <div>
      <div className="cards-container">
        {(filteredPokemons.length > 0 ? filteredPokemons : pokemons)
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map(pokemon => (
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
          ))}
      </div>
      {pokemons.length === 0 && (
  <div className="no-results-container">
    <img src="https://assets.stickpng.com/images/5a0596df9cf05203c4b60445.png" alt="No Results" className="no-results-image" />
    <p>No results found.</p>
  </div>
)}
      {pokemons.length > 0 && (
        <div>
          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      )}
    </div>
  );
};

export default Cards;
