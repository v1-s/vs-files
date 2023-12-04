import React from "react";
// import {a} from 'react-router-dom';
export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">density</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a" aria-current="page" href="#">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">Blogs</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-a" aria-disabled="true">LeaderBoard</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" aria-disabled="true">Fees</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success" type="submit">TRADE NOW</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}