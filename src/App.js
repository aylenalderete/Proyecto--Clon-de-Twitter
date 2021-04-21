import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import IniciarSesion from './components/IniciarSesion';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Navbar}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/iniciarsesion' component={IniciarSesion}/>
      </Router>
    </div>
  );
}

export default App;
