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
import { useState } from 'react';
import ProductDetails from './Components/ProductD';
import React from 'react';
import AddToCart from './Components/AddToCart';
import CartContextProvider from './Components/Context/Cart';
function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="App">
  
     <BrowserRouter>
     <CartContextProvider>

     <Navbar/>
     <Routes>
      <Route exact path="/" element={<><Home/><Slider/><Banner1/><Big/><NA/><BS/><Mfoot/></>}></Route> 
      <Route exact path="/shop" element={<><Shop/></>}></Route> 
      <Route path="/product/:id" element={<ProductDetails/>}></Route>  
 
      <Route path="/cart" element={<><AddToCart/></>}></Route>  
     </Routes>
      </CartContextProvider>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
