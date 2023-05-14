import { useSelector } from 'react-redux';
import { Cards } from '../../components/index'

const Home = () => {
    
    const pokemons = useSelector((state) => state.pokemons)
    
    return (
        <div className=''>
            <div>
                <Cards pokemons={pokemons}/>
            
            </div>
        </div>
    )
}

export default Home;
