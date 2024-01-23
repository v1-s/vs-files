import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const handleAddToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  }
  return (
    <>
    <nav className="navbar bg-body">
      <div className="container-fluid">
        <div className="Title">
        <FontAwesomeIcon
          icon={faBagShopping}
          size="2xl"
          className="Logo"
          style={{
            "--fa-primary-color": "#050505",
            "--fa-secondary-color": "#0a0a0a",
            "--fa-secondary-opacity": "1",
          }}
        />



        <a className="navbar-brand flex items-center">Mart</a>
        </div>
        <div className="header">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/shop" className="orders--active">
            <h1>Shop</h1>
          </Link>
          <Link to="/cart" className="orders--active">
            <h1>Cart</h1>
             
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

      <FontAwesomeIcon icon={faHeart} 
          size="xl"
          className="more-options"
          
           />
           <span className="cart-count">{wishlistCount}</span>
          
           </div>
        </div>
      </div>
    </nav>
</>
  )
        }


