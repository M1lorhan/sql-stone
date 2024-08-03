import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Signup from "./components/signup"
import Products from './components/product';
import Cart from './components/cart';
import Login from './components/login';
import Default from './components/default';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Default />
        <NavBar />
        <Footer />
        <Router>
          <main>
            <Routes>
              <Route path='/' />
              <Route path='/product' element={<Products />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </main>
        </Router>
      </header>
    </div>
  );

}

export default App;
