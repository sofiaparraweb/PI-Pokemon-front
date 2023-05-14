import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom";
import { getPokemonDetail } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
    const { pokemonsDetail } = useSelector((state) => state);
    const { id } = useParams();

    React.useEffect (()=>{
        dispatch(getPokemonDetail(id));
    }, [id,dispatch]);


    return (
      <div>
        {pokemonsDetail.name ? (
          <div>
            <div>
              <div>
                <Link to='/home'>
                  <p>Atras</p>
                </Link>
              </div>
              <div>
                <div></div>
                <div>
                  <div></div>
                </div>
                <p>{pokemonsDetail.name}</p>
                <div>
                  <p>{pokemonsDetail.id}</p>
                  <p>Vida: {pokemonsDetail.vida}</p>
                  <p>Ataque: {pokemonsDetail.ataque}</p>
                  <p>Defensa: {pokemonsDetail.defensa}</p>
                  <p>Altura: {pokemonsDetail.altura}</p>
                  <p>Peso: {pokemonsDetail.peso}</p>
                  <div>
                    <p>Tipo:</p>
                    {pokemonsDetail.type.map((type) => {
                      return <p>{type}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    );
    
}

export default Detail;