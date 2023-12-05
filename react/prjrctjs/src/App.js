// import logo from './logo.svg';
import './App.css';
import Sign from './Components/Sign';
import Dashboard from './Components/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './Components/Sign.css';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
   <Dashboard/>
   {/* <BrowserRouter>
   {/* <Sign/> */}
   {/* <Routes>
    <Route exact path='/' element={<Sign/>}/>
   <Route exact path='/Home' element={<><Home/></>}/>
    <Route exact path='/Dashboard' element={<><Dashboard/></>}/>
   </Routes>
   </BrowserRouter> */}

    </div>
  );
}

export default App;
