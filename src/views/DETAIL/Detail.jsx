import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../redux/actions';
import './Detail.css';
import { NavBar } from '../../components/index';

const Detail = () => {
  const dispatch = useDispatch();
  const { pokemonsDetail } = useSelector((state) => state);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getPokemonDetail(id)).then(() => {
      setIsLoading(false);
    });
  }, [id, dispatch]);

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  return (
    <div className="detail-container">
      {isLoading ? (
        <div className="loading-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6356/6356630.png"
            alt="Loading Pokeball"
            className="loading-image"
          />
          <p className="loading-text">POKEMONS ARE ARRIVING HOME...</p>
        </div>
      ) : (
        !isEmptyObject(pokemonsDetail) ? (
          <div>
            <div className="detail-title">{pokemonsDetail.name}</div>
            <div className="detail-content">
              <img
                className="detail-image"
                src={pokemonsDetail.image}
                alt={pokemonsDetail.name}
              />
              <div className="detail-info">
                <p>
                  <img
                    className="detail-icon"
                    src="https://cdn-icons-png.flaticon.com/512/44/44839.png"
                    alt="HP"
                  />{' '}
                  HP: {pokemonsDetail.life}
                </p>
                <p>
                  <img
                    className="detail-icon"
                    src="https://icones.pro/wp-content/uploads/2022/07/symbole-d-eclair-noir.png"
                    alt="ATTACK"
                  />{' '}
                  ATTACK: {pokemonsDetail.attack}
                </p>
                <p>
                  <img
                    className="detail-icon"
                    src="https://cdn-icons-png.flaticon.com/512/81/81137.png"
                    alt="DEFENSE"
                  />{' '}
                  DEFENSE: {pokemonsDetail.defense}
                </p>
                <p>
                  <img
                    className="detail-icon"
                    src="https://www.pngmart.com/files/16/Meter-Speed-PNG-Photos.png"
                    alt="SPEED"
                  />
                  SPEED: {pokemonsDetail.speed}
                </p>
                <p>
                  <img
                    className="detail-icon"
                    src="https://static.thenounproject.com/png/2395974-200.png"
                    alt="HEIGHT"
                  />{' '}
                  HEIGHT: {pokemonsDetail.height}
                </p>
                <p>
                  <img
                    className="detail-icon"
                    src="https://static.vecteezy.com/system/resources/previews/002/608/040/original/weight-scale-measuring-equipment-line-icon-design-free-vector.jpg"
                    alt="WEIGHT"
                  />{' '}
                  WEIGHT: {pokemonsDetail.weight}
                </p>
                <div className="detail-types">
                  <p>TYPE:</p>
                  {pokemonsDetail.types && (
                    <div>
                  {pokemonsDetail.types.split(', ').map((type, index) => (
                        <p key={index}>{type}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="detail-back-link">
              <Link to="/home">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/48/48821.png"
                  alt="Back Home"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )
      )}
      <NavBar />
    </div>
  );
};

export default Detail;
