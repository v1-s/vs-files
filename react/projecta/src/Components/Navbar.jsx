import React, { useState } from "react";
import logo from './Assests/logo1.jpg';
import { Link } from "react-router-dom";

export default function Navbar(){
  function select(){
          return(
            <h1>hsgfh</h1>
          )
  }
    const[state,setState]=useState({
      CorporateTraining:'CorporateTraining',
      Placements:'Placements',
      Blog:'Blog',
      Review:'Review',
      Internship:'Internship'
      })
    const {CorporateTraining,Placements,Review,Internship,Blog} = state;

  
        return (
            <>
            
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
 
    <Link className="nav-item" to='/'>
    <img src={logo} alt="Logo" style={{width:'300px',height:'90px',marginLeft:'10px'}}/>
    </Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Courses
          </a>
          <ul className="dropdown-menu" >
            <li className="dropdown-submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <li className="dropdown-item onClick={select}" >Front End Courses</li>
        </li>

            {/* <li><a className="dropdown-item" href="#">Front End Courses</a>
            </li> */}

            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Full Stack Courses</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Mobile Application Development</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Cloud Computing</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Data Science</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Artificial Intelligence</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">SAP</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Digital Marketing Courses</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Microsoft Training</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Software Testing</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">USA</a></li>
          </ul>
        </li> 
        <li className="nav-item" id="ctrain">
          {/* <a className="nav-link" href='/CorporateTraining'>{CorporateTraining}</a> */}
          <Link className="nav-link" to="/Corporate">Corporate Training</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Placements'>Placements</Link>
        </li>
      
        <li className="nav-item">
          {/* <a className="nav-link" href='/Internship'>Internship</a> */}
          <Link className="nav-link" to='/Internship'>Internship</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/Review'>Reviews</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/Blog'>Blog</Link>
        </li>
      </ul>
    </div>
  
  </div>
 
</nav>

</>
    
)
};