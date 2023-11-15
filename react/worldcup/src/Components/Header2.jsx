import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Head() {
    const [input,setInput]=useState('');
    const [submit,setSubmit]=useState('');
    const [open,setOpen]=useState('');
    const [navItems] = useState({
        Home: 'Home',
        Contacts: 'Contacts',
        Features: 'Features',
        About: 'About'
    });

    const { Home, Features, Contacts, About } = navItems;
    function Submit(event){
            setInput(event.target.value);
            setSubmit(input);
    }
    function Open(){
            setOpen
    }

 return (
  <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
     <Link className="nav-link" to="/">{Home}</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/Features">{Features}</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/Contacts">{Contacts}</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link" to="/About">{About}</Link>
     </li>
     </ul>
     <form onSubmit={Submit} className="d-flex" role="search">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success" type="submit" onClick={Open}>Login</button>
     <div className='field' style={{display:'none'}}>
     <input type='text' placeholder='Enter your Email'/>
     <input type='password' placeholder='Enter your Password'/>
     </div>
     </form>
     </div>
     </div>
     </nav>
     </>
    );
}

