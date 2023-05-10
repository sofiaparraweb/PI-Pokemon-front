//ESTE COMPONENTE DEBE MOSTRAR LA INFO 
//DE CADA POKEMON MAPEADO, PERO ADEMAS, 
//DARNS UN LINK PARA IR AL DETALLE 
//DEL POKEMON EN CUESTION
import './Card.css'

import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <p className="card-name">{props.name}</p>
      <img className="card-image" src={props.image} alt="Pokemon" />
      <p className="card-stat">HP: {props.life}</p>
      <p className="card-stat">Attack: {props.attack}</p>
      <p className="card-stat">Defense: {props.defense}</p>
    </div>
  );
};

export default Card;
