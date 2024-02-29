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
// import CartItem from './Components/AddToCart';
import CartContextProvider from './Components/Context/Cart';
// import  { useCartContext } from './Components/Context/Cart';
import CartPage from './Components/Cartpage';
// import { Link } from 'react-router-dom';
const CartContext = React.createContext();
  export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
}
function App() {
  const [selectedId, setSelectedId] = useState(null);


  // return (

    {/* <div className="App"> */}
  return (
   
      <BrowserRouter>
       <CartContextProvider>
        <Navbar />
        {/* Wrap the routes in a React.Fragment */}
        <React.Fragment>
          <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <Slider />
                <Banner1 />
                <Big />
                <NA />
                <BS />
                <Mfoot />
              </>
            }
          />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </React.Fragment>
        </CartContextProvider>
      </BrowserRouter>
  
  );
}

export default App;

{/* 
     <BrowserRouter>
     <Navbar/>
     
     <Routes>
    
   
     

    
   
      <Route exact path="/" element={<><Home/><Slider/><Banner1/><Big/><NA/><BS/><Mfoot/></>}></Route> 
      <Route exact path="/shop" element={<><Shop/></>}></Route> 
      <Route path="/product/:id" element={<ProductDetails/>}></Route>  
      <CartContextProvider>
      <Route path="/cartpage" element={<><CartPage/></>}/>
    
     </CartContextProvider>
    
     </Routes>
     </BrowserRouter>
     
    
     
    </div>
    </>
  );
}

export default App; */}
