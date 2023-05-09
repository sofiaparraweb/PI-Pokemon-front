//ESTE COMPONENTE DEBE TOMAR UN ARRAY DE POKEMONS, 
//Y POR CADA POKEMON, RENDERIZAR UN COMPONENTE CARD

import Card from "../CARD/Card"

const Cards = () => {
  const pokemons = [
  ];
  
    return (
       <div>
       {pokemons.map(pokemon => {
        return <Card 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.image}
        hp={pokemon.life}
        attack={pokemon.attack}
        defense={pokemon.defense}
        speed={pokemon.speed}
        height={pokemon.height}
        weight={pokemon.weight}
        />
       })}
       </div>
     );
   }
   
   export default Cards;

   