import React from 'react';
import './App.css';
import './Components/ProjectFlpkt/Flpkt.css';
// import About1 from './Components/About1';
// import About from './Components/About';
// import Header from './Components/Header';
import Navbar from './Components/ProjectFlpkt/Header';
import MinSlider from './Components/ProjectFlpkt/Minnavbar';
function App() {
  return (
    <div className="App">
      {/* <About/> */}
      {/* <About1/> */}
      {/* <Header/> */}
      <Navbar/>
      <MinSlider/>
    </div>
  );
}

export default App;
