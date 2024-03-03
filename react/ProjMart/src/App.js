import logo from './logo.svg';
import './App.css';
import './Components/Mart.css';
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Banner1 from './Components/Banner1';
import Mfoot from './Components/Mfooter';
import Big from './Components/Bd';
import Home from './Components/Home';
import NA from './Components/NA';
import BS from './Components/BS';
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
import { useState,useContext } from 'react';
import ProductDetails from './Components/ProductD';
import React from 'react';

// import CartPage from './Components/Cartpage';
import Cartitems from './Components/Cartitems';
import CartActions from './Components/CartActions';
import CartSummary from './Components/Cartsummary';
import Cart from './Components/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
   
   
    <Routes>
  
     <Route exact path="/" element={<><Home/><Slider/><Banner1/><Big/><NA/><BS/><Mfoot/></>}></Route> 
     <Route exact path="/shop" element={<><Shop/></>}></Route> 
     <Route path="/product/:id" element={<ProductDetails cartItems={cartItems}/>}></Route>  
    
     <Route path="/cart" element={<><Cart cartItems= {cartItems}/></>}/>
    
   
 
    </Routes>
   
    </BrowserRouter>
     </div>
 );
}

export default App;

 

