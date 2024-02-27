import React from "react";
import "../Navbar/Navbar.css";
import Search from "../Search";
function Navbar(){
    return(
        <>
        
    {/* <div className='page_title'>
    <h1>NETFLIX</h1> */}
    <div className="nav">
      <div className="page_title">
        <img 
          className="nav_logo_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <ul className="navbar_links">
        <li className="navbar_link">Home</li>
        <li className="navbar_link">Tv Shows</li>
        <li className="navbar_link">Movies</li>
        <li className="navbar_link">Latest</li>
        <li className="navbar_link">My list</li>
      </ul>
      <Search/>
    </div>
{/* </div>   */}
       
        </>
    )
}
export default Navbar;