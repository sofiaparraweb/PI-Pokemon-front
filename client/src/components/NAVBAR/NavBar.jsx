import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
 return (
    <div className='NavBar'>
     <Link to='/home'>HOME</Link>
     <Link to='/create'>FORM</Link>
    </div>
  );
}

export default NavBar;