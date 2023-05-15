import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
      <div className="card-container">
       <Link to={`/detail/${props.id}`} className="card-link">
          <p className="card-name">{props.name}</p>
        </Link>
        <img className="card-image" src={props.image} alt="Pokemon" />
        {/* <p className="card-stat">HP: {props.life}</p>
        <p className="card-stat">Attack: {props.attack}</p>
        <p className="card-stat">Defense: {props.defense}</p> */}
        <p className="card-stat">Type: {props.types}</p>
      </div>
  );
};

export default Card;
