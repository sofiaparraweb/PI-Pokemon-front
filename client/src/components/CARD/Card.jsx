import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <Link to={`/detail/${props.id}`} className="card-link" style={{ textDecoration: 'none' }}>
            <img className="card-image" src={props.image} alt="Pokemon" />
            <p className="card-name">{props.name}</p>
          </Link>
        </div>
        <div className="back">
          <Link to={`/detail/${props.id}`} className="card-link" style={{ textDecoration: 'none' }}>
            <p className="card-stat">ATTACK: {props.attack}</p>
            <p className="card-stat">DEFENSE: {props.defense}</p>
            <p className="card-stat">TYPE: {props.types}</p>
            {/* hacer un map para que me aparezcan separados */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
