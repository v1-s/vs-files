// import logo from './logo.svg';

// import './App.css';
//import Home from './Components/Home';
// import MyForm from './Components/Form';
// import Header from './Components/Header';
//  import Home from './Components/H';
//  import Contacts from './Components/Cont';
//  import Features from './Components/Features';
//  import About from './Components/About';
// import Head from'./Components/Header2';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import FForm from "./Components/Funform";
import Pract from "./Components/pract";
import Login from './Components/pract2';
import Counter from './Components/Hooks';
import contxtcreate from './Components/UseContext';
// import LoginLogout from "./Components/pract2";
  //  import UseEff from './Components/UseEff';
  //  import prop from './Components/prop';
  //  import Child1 from './Components/Child1';
  // import Table from './Components/Table';
  // import Table1 from './Components/Table';
function App() {
  const contxtvalue={message:"Hello"}
  return (
    <div className="App">
    <contxtcreate.Provider value={contxtvalue}>
     
             <Counter/>
       
  
         
      </contxtcreate.Provider>
            {/* <prop value={data}/> */}
            {/* <Child1/> */}
            {/* <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Pract/>}/>
              <Route exact path='/login' element={<Login/>}/>

            </Routes>
         </BrowserRouter> */}
          {/* <LoginLogout/> */}
 {/* <UseEff></UseEff>  */}
               {/* <Table></Table>  */}
              {/* <FForm></FForm>  */}
 {/* <Home></Home>
   <MyForm></MyForm> */}
 {/* <Home>
 </Home>
  <Contacts></Contacts> */}
     
 {/* <BrowserRouter>
 <Header></Header> 
{/* <Head></Head>*/}
{/* <Routes>
  <Route exact path="/"  element={<Home/>} />
//       //   <Route exact path="/Contacts" element={<Contacts/>} />
//       //    <Route exact path="/About" element={<About/>} /> 
//       //   <Route exact path="/Features" element={<Features/>} />

      

//       // </Routes>
//       // </BrowserRouter> */}

 
    </div>
  );
}

export default App;