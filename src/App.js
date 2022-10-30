import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Products from './Products';
import {Route, Link, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Account from './Account'
import Cart from './Cart'
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
      <Route path="/account" element = {<Account/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
