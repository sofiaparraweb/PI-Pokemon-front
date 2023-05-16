import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../redux/actions';

const Detail = () => {
  const dispatch = useDispatch();
  const { pokemonsDetail } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [id, dispatch]);

  return (
    <div>
      {pokemonsDetail ? (
        <div>
          <div>
            <div></div>
            <div>
              <div></div>
            </div>
            <p key="name">{pokemonsDetail.name}</p>
            <div>
              <p key="id">{pokemonsDetail.id}</p>
              <p key="life">HP: {pokemonsDetail.life}</p>
              <p key="attack">ATTACK: {pokemonsDetail.attack}</p>
              <p key="defense">DEFENSE: {pokemonsDetail.defense}</p>
              <p key="height">HEIGHT: {pokemonsDetail.height}</p>
              <p key="weight">WEIGHT: {pokemonsDetail.weight}</p>
              <img src={pokemonsDetail.image} alt={pokemonsDetail.name} />

              <div>
                <p>TYPE:</p>
                {pokemonsDetail.types && (
                  <div>
                    {pokemonsDetail.types.split(", ").map((type, index) => {
                      return <p key={index}>{type}</p>;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Link to='/home'>
              <p>BACK HOME</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
      }  

export default Detail;
