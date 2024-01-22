import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Mfoot() {
  return (
    <>
      <div className="Bfoot container-fluid">
        <div className="row">
          <div className="BF1 col-sm-12 col-md-3">
            <FontAwesomeIcon
              icon={faBagShopping}
              size="2xl"
              className="FLogo"
              style={{
                "--fa-primary-color": "#050505",
                "--fa-secondary-color": "#0a0a0a",
                "--fa-secondary-opacity": "1",
              }}
            />
            <a className="Ftitle">Mart</a>
            <div className="Fcontent">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, voluptates neque. Aut laborum qui adipisci quo hic
                modi quisquam? Dignissimos nemo rem sit deleniti odio atque
                minus similique architecto sint.
              </p>
            </div>
          </div>
          <div className="BF2 col-sm-12 col-md-3">
            <div className="Bcontent">
              <h5>About Us</h5>
              <div className="FcontA">
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cases</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="BF3 col-sm-12 col-md-3">
            <div className="BF3content">
              <h5>Customer Care</h5>
              <div className="FcontC">
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="BF4 col">
            <div className="BF4content">
              <h5>Contact Us</h5>
              <div className="FcontD">
                <ul>
                    <li>70 Washington Square South,New York,NY 10012</li>
                    <li>United States </li>
                    <li>Email:example@gmail.com</li>
                    <li>Phone: +1 1123 456 780</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
