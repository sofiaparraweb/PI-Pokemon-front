import './App.css';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Create } from './views/index';
import NavBar from './components/NAVBAR/NavBar';

function App() {
const location = useLocation();
  
return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/detail' component={Detail} />
      <Route exact path='/create' component={Create}/>
    </div>
  );
}

export default App;

