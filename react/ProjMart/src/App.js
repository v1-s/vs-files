import logo from './logo.svg';
import './App.css';
import './Components/Mart.css';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Banner1 from './Components/Banner1';
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<><Home/><Slider/><Banner1/></>}></Route>
      <Route exact path="/shop" element={<Shop/>}></Route>
      <Route exact path="/cart" element={<Cart/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
