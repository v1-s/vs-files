import './App.css';
import Header from './Component/Function';
// import Contacts from './Component/Contacts';
//  import Features from './Component/Features';
//  import Home from './Component/Home'; 
import {Routes, BrowserRouter, Route} from 'react-router-dom';
//  import Function from './Component/Function';
function App() {
  return (
    <div className="App">
    <Header></Header> 
     {/* <Function></Function> */}
         {/* <Home></Home> */}
    {/* <Features></Features>*/}
     {/* <Contacts></Contacts> */}
      {/* <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>}  />
      <Route exact path='/Features' element={<Features/>} />
      <Route exact path='/Contacts' element={<Contacts/>} />
     </Routes>
     </BrowserRouter>  */}







    </div>
  );
}

export default App;
