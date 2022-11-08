import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Products from './Products';
import {Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login'
import Cart from './Cart'
import Register from './Register'
import './styles/NavBar.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/products" element = {<Products/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path="/register" element = {<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
