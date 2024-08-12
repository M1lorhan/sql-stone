import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar"
import Signup from "./components/signup"
import Glasses from './components/glasses';
import Cart from './components/cart';
import Login from './components/login';
import Default from './components/default';
import GlassesId from './components/glassesId';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Default/>} />
              <Route path='/glasses' element={<Glasses />} />
              <Route path='/glasses/:glasses_name' element={<GlassesId />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </main>
      </header>
    </div>
    </Router>
  );

}

export default App;
