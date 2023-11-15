import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Contacts from './Components/Contacts';
import Features from './Components/Features';
import About from './Components/About';
// import Home from './Components/Home'; 
import {Routes, BrowserRouter, Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header> 
     <Routes>
      <Route exact path='/' element={<Home/>}  />
      <Route exact path='/Features' element={<Features/>} />
      <Route exact path='/Contacts' element={<Contacts/>} />
      <Route exact path='/About' element={<About/>} />
     </Routes>
     </BrowserRouter> 







    </div>
  );
}

export default App;
