import './App.css';
import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Create, About } from './views/index';
import axios from 'axios';
axios.defaults.baseURL = "https://pokemon-back-jt9f.onrender.com/";

function App() {
const location = useLocation();
  
return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Create}/>
      <Route exact path='/about' component={About}/>
    </div>
  );
}

export default App;

