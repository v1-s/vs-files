import React from "react";
import ArmChair from "./Assests/Images/hero-img.png";
export default function Slider() {
  return (
    <>
      <div className="banner">
        <div class="container text-center">
          <div class="row">
            <div className="hrlogo col-sm-6">
             <h1>50%  Off  For  Your <br></br>  First  Shopping</h1> 
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                fugit, dolorum ut et ad modi illo officia laboriosam nam rerum
                corrupti necessitatibus debitis molestias odio sapiente est ea
                error vitae?
            </p>
            <button>Visit Collections</button>
            </div>
            <div className="herologo col-sm-4">
              <img src={ArmChair} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
