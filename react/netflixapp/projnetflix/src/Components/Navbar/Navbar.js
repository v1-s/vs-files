import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
        <>
        
    <div className='page_title'>
    <h1>NETFLIX</h1>
    <div className="Nav_bar">  
            <ul className="Nav_options">
                <li> Home</li>
                <li> TV Shows </li>
                <li> Movies</li>
                <li> Latest</li>
                <li> My List</li>

                </ul>
    </div>
</div>  
       
        </>
    )
}
export default Navbar;