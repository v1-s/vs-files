import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
export default function Banner1() {
  return (
    <>
      <div className="Bcont container text-center">
        <div className="row">
          <div className="B1 col-sm-12 col-md-3">
            <FontAwesomeIcon className="Icon" icon={faCar} size="xl" />
            <div className="Bcontent">
              <h5>Free Shipping</h5>
              <p>
                Lorem ipsum dolor sit amet.
               </p>
            </div>
          </div>
          <div className="B2 col-sm-12 col-md-3">
            <FontAwesomeIcon className="Icon" icon={faCreditCard} size="xl" />
            <div className="Bcontent">
              <h5>Secure Payment</h5>
              <p>
                Lorem ipsum dolor sit amet.
               </p>
            </div>
          </div>
          <div className="B3 col-sm-12 col-md-3">
            <FontAwesomeIcon className="Icon" icon={faShieldHalved} size="xl" />
            <div className="Bcontent">
              <h5>Safe Payment</h5>
              <p>
                Lorem ipsum dolor sit amet.
               </p>
            </div>
          </div>
          <div className="B4 col">
            <FontAwesomeIcon className="Icon" icon={faHeadphones} size="xl" />
            <div className="Bcontent">
              <h5>Back Guarentee</h5>
              <p>
                Lorem ipsum dolor sit amet.
               </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
