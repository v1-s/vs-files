import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
    <nav className="navbar bg-body">
      <div className="container-fluid">
        <FontAwesomeIcon
          icon={faBagShopping}
          size="xl"
          className="Logo"
          style={{
            "--fa-primary-color": "#050505",
            "--fa-secondary-color": "#0a0a0a",
            "--fa-secondary-opacity": "1",
          }}
        />
        <a className="navbar-brand flex items-center">Mart</a>
        <div className="header">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/shop" className="orders--active">
            <h1>Shop</h1>
          </Link>
          <Link to="/cart" className="orders--active">
            <h1>Cart</h1>
            {/* <span className="cart-count">1</span> */}
          </Link>
          <div className="font">
          <FontAwesomeIcon
            icon={faUser}
             size="xl"
            className="more-options"
          />
          <FontAwesomeIcon icon={faCartShopping} 
          size="xl"
          className="more-options"
           />
           </div>
        </div>
      </div>
    </nav>
</>
  )
        }
































      {/* <nav className="navbar bg-body">
        <div className="container-fluid">
      
    <FontAwesomeIcon
        icon={faBagShopping}
        size="xl"
        className="Logo"
        style={{
            "--fa-primary-color": "#050505",
            "--fa-secondary-color": "#0a0a0a",
            "--fa-secondary-opacity": "1",
        }}
    /> 
       <a className="navbar-brand flex items-center">Mart</a>
       </div> */}
       {/* <div className="header">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/cart" className="orders--active">
          <h1>Cart</h1>
        </Link>
        <Link to="/shop" className="orders--active">
          <h1>Shop</h1>
        </Link>
      </div>
            */}
           {/* <div className="Sidebar">
           <a className="navbar-brand flex items-center">Home</a>
       <a className="navbar-brand flex items-center">Shop</a>
       <a className="navbar-brand flex items-center">Cart</a>
       </div> */}
    

