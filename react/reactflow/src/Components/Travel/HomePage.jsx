import React from "react";
import "../Travel/Homepage.css";
export default function HomePage() {
  return (
    <>
      {/* <div classNameName="Home align-items-left">
            <h1> Travel World</h1>
        </div> */}
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Travel World
          </a>

          {/* --------------------------------------------------- */}

          <div class="search-bar">
            <div class="input-group">
              <input
                class="form-control me-0"
                type="search"
                id="search-term"
                placeholder="Search by City"
                aria-label="Search term"
              />
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 3
                  </a>
                </li>
              </ul>
              

            </div>
          </div>
        <div className="form-ctrl">
          <input className="fmctrl ms-0 me-2"  id="search-pad"  type="search" placeholder="Search" aria-label="Search"/>
        </div>
        <div className="image ms-2">
          <img src="" alt="broken-image"/>
        
              <button
                class="btn btn-outline dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Category 3
                  </a>
                </li>
              </ul>
        </div>


          {/* ----------------------------------------Exit-------------------------------- */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Travel World
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
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
          </div>
        </div>
        </nav>
{/* ---------------------------------------2nd Nav ----------------------------------------------------- */}

<div className="secNavbar ms-5 mt-5">
  <div className="sec-item">Handout Picks</div>
  <div className="sec-item">Best Sellers</div>
  <div className="sec-item">Handout Picks</div>
  <div className="sec-item">Handout Picks</div>

</div>





























    </>
  );
}
