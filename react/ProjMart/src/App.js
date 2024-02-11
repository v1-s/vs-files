import logo from './logo.svg';
import './App.css';
import './Components/Mart.css';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Banner1 from './Components/Banner1';
// import BigD from './Components/BigDis';
import  NewA from './Components/NewArl';
// import BestS from './Components/BestS';
import Mfoot from './Components/Mfooter';
import products from './Components/products';
import Big from './Components/Bd';
import NA from './Components/NA';
import BS from './Components/BS';
// import ProductD from './Components/ProductD';
//import OrderPage from './Components/Cart';
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
import { useState } from 'react';
import ProductCard from './Components/ProductD';
import ProductDetails from './Components/ProductD';
import React from 'react';
import CartWrapper from './Components/CartWrapper';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="App">
   
     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route exact path="/" element={<><Home/><Slider/><Banner1/><Big/><NA/><BS/><Mfoot/></>}></Route> 
   <Route exact path="/shop" element={<><Shop/></>}></Route> 
    <Route path="/product/:id" element={<ProductDetails />}>   </Route>  
        <Route path=":productId" element={<ProductCard />} /> 
 
   {/* <Route path="/cart/:id" element={<><CartWrapper/></>}></Route>   */}
   {/* <Route exact path="/cart" element={<><Cart/></>}></Route>  */}
 </Routes>







     {/* <Routes>
      <Route exact path="/" element={<><Home/><Slider/><Banner1/><Big/><NA/><BS/><Mfoot/></>}></Route>
      <Route exact path="/shop" element={<><Shop/></>}></Route> */}
      {/* <Route>
      <Route path="/product/:id" render={(props) => <ProductDetails {...props} selectedId={selectedId} setSelectedId={setSelectedId} />} />
      <Route path="/cart/:id" component={CartWrapper} />
    </Route> */}
      {/* <Route exact path= "/product/:id" element={<><ProductDetails/></>}></Route> */}
      {/* <Route exact path="/cart" element={<><Cart/></>}></Route> */}

      {/* <Route exact path="/" element={<></>}></Route> */}
{/*      
      <>
        <Route exact path="/" element={<></>}></Route> 
        </> */} 
     
      {/* </Routes> */}
     {/* <Mfoot/> */}
     </BrowserRouter>
     
    </div>
  );
}

export default App;
