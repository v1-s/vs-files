import React from 'react';
// import './App.css';
import Home from './Components/Bgground';
 import Content from './Components/Content';
 import Content2 from './Components/Content2';
 import './Components/Figma.css';
import Navbar from './Components/Navbar';
import Trade from './Components/Trade';
import Start from './Components/Start';
import Derivative from './Components/Derivates';
import Dont from './Components/Dont';
import Earn from './Components/Earn';
import Footer from './Components/Foot';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar />

      <Content/>
      <Content2/> 
      <Trade/> 
      <Start/>
      <Derivative/>
      <Dont/>
      <Earn/>
  
      <Footer/> 
      {/* <BrowserRouter>
      
      <Routes>
      <Route exact path='/' element={<></>} />
      </Routes>
      </BrowserRouter> */}
      
      </div>
  );
}

export default App;
