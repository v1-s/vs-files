import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './Components/Assests/logo1.jpg';
import './Components/Assests/proj.css';
import Blog from './Components/Blog';
import Corporate from './Components/Corporate';
import Footer from './Components/Footer';
import Intern from './Components/Internship';
import Navbar from './Components/Navbar';
import Placements from './Components/Placement';
import Review from './Components/Review';
import Slider from './Components/Slider';
import UI from './Components/UI development';
import Angular from './Components/AngularJs';
import Reactjs from './Components/ReactJs';
import Form from'./Components/Frm';
import Trending from './Components/Trendingcourse';
import Recentadd from './Components/Recentadd';
import Reviews from './Components/Hreviews';
function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
       <Navbar/>
    
        <Routes>
        
          <Route exact path='/' element={<><Slider/> <Trending/><Recentadd/><Reviews/><logo/></>} />
          <Route exact path='/Corporate' element={<Corporate/>}/>
          <Route exact path='/Internship' element={<Intern/>}/>
          <Route exact path='/Review' element={<Review/>}/>
          <Route exact path='/Placements' element={<Placements/>}/>
          <Route exact path='/Blog' element={<Blog/>}/>
          <Route exact path='/UI' element={<UI/>}/>
          <Route exact path='/Angular' element={<Angular/>}/>
          <Route exact path='/ReactJs' element={<Reactjs/>}/>
          <Route exact path='/Form' element={<Form/>}/>
     
        </Routes>
   
        <Footer/>
        </BrowserRouter>
        
       
    </div>
  );
}

export default App;
