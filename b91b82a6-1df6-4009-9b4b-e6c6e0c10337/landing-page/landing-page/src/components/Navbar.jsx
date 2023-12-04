import React from 'react'
// style={{backgroundColor:"#013220"}}

export default function Navbar() {
  return (
    <div className='Navbar-back'><nav class="navbar navbar-expand-lg navbar-light  " style={{backgroundColor:"#013220"}}   >
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style={{color:"yellow"}}>eyags</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" >
          <li class="nav-item" >
            <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:"white"}}>Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:"white"}}>Leaderboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:"white"}}>Fees</a>
          </li>
          <li class="nav-item">
            <button className='btn-trade'>

            <a class="nav-link" href="#" style={{color:"black" ,fontWeight:"bold",fontSize:"x-small"}}>TRADE NOW</a>
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

    </div>
  );
}

