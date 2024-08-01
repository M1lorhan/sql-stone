import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar"
import Footer from "./components/footer"
import Signup from "./components/signup"
import Products from './components/product';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Footer />
        <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/product'>Products</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </ul>
        </header>
      <main>
        <Routes>
          <Route path='/' />
          <Route path='/product' element={<Products />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>
        </Router>
      </header>
    </div>
  );

}

export default App;
