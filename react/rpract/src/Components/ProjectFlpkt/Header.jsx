import React from "react";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser} from '@fortawesome/free-regular-svg-icons';
import {faCartShopping} from '@fortawesome/free-regular-svg-icons';
import {faStore} from '@fortawesome/free-regular-svg-icons';
export default function Navbar(){
    return (
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="logo navbar-brand" href="#">FlipKart</a>
    <form className="d-flex" role="search">
      <input className="form-control" type="search" placeholder="Search for Products, Brands and More" aria-label="Search"/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav nav-pills">
      <li class="nav-item">
       <a class="nav-link"  href="#"><FontAwesomeIcon icon={faCircleUser} size="2xl"></FontAwesomeIcon>Login</a>
       </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><FontAwesomeIcon icon={faCartShopping} size="2xl"></FontAwesomeIcon>Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><FontAwesomeIcon icon={faStore} size="2xl"></FontAwesomeIcon>Become a Seller</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">:</a>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
}
