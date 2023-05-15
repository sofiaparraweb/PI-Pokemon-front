import './App.css';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Create, About } from './views/index';
import NavBar from './components/NAVBAR/NavBar';

function App() {
const location = useLocation();
  
return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create}/>
      <Route exact path='/about' component={About}/>
    </div>
  );
}

export default App;

