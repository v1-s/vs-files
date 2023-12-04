import { useState } from "react";
import React  from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Login";
function Header(){
  const [state, setState] = useState({
    Home: 'Home',
    Contacts: 'Contacts',
    Features: 'Features',
    About: 'About'
  });
  const { Home, Contacts, Features, About } = state;
        return(
            <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
        <Link className="nav-link" to="/">{Home}</Link>
         {/* <Link className="nav-link" to="/">{LoginForm}</Link> */}
         </li>
        <li  className="nav-item">
          <Link className="nav-link" to="/Features">{Features}</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Contacts">{Contacts}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{About}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link className="btn btn-outline-success" to="/LoginForm">Login</Link>
      </form>
    </div>
  </div>
</nav>
</>
        );
    }
  export default Header

// class Header extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//           Home:'Home',
//           Contacts:'Contacts',
//           Features:'Features',
//           About :'About'
//        }
//   }
//   render(){