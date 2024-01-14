import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand flex items-center">
    <FontAwesomeIcon
        icon={faBagShopping}
        size="xl"
        style={{
            "--fa-primary-color": "#050505",
            "--fa-secondary-color": "#0a0a0a",
            "--fa-secondary-opacity": "1",
        }}
    /> 
       Mart
</a>
           
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
