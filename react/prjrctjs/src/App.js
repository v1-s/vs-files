// import logo from './logo.svg';
import './App.css';
import Sign from './Components/Sign';
import Dashboard from './Components/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './Components/Sign.css';
import Home from './Components/Home';
import Addprof from './Components/Addprof';
import Popup from './Components/Popup';
import Form1 from './Components/Form1';
import Contact from './Components/Contact';
import Dash1 from './Components/Dash1';
import Logout from './Components/users';
import Modal from './Components/Modal';
import Mbox from './Components/Mbox';
function App() {
  return (
    <div className="App">
   {/* <Dashboard/> */}
   <BrowserRouter>
    {/* <Sign/> */}
   <Routes>
    <Route exact path='/' element={<><Sign/></>}/>
    <Route exact path='/Home' element={<><Home/></>}/>
    <Route exact path='/Dashboard' element={<><Dashboard/><Dash1/></>}/>
    <Route exact path='/Addprof' element={<><Addprof/></>}/>
    <Route exact path='/Mbox' element={<><Logout/><Modal/><Mbox/></>}/>
    <Route exact path='/Popup' element={<><Popup/></>}/> 
    <Route exact path='/Form1' element={<><Form1/></>}/> 
    <Route exact path='/Contact' element={<><Contact/></>}/>
  </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
