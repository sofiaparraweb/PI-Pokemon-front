import { useSelector } from 'react-redux';
import { Cards, NavBar } from '../../components/index'

const Home = () => {
    
    const pokemons = useSelector((state) => state.pokemons)
    
    return (
        <div className=''>
            <div>
                <NavBar />
                <Cards pokemons={pokemons}/>
            </div>
        </div>
    )
}

export default Home;
