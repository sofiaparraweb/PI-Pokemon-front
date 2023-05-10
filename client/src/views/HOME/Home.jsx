import React from 'react';
import Cards from '../../components/CARDS/Cards';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';

const Home = () => {

  const dispatch = useDispatch();
  
  useEffect(()=> {
dispatch(getPokemons());
  }, [dispatch])

 return (
    <div>
     <h1>HOMEEE</h1>
     <Cards />
    </div>
  );
}

export default Home; 