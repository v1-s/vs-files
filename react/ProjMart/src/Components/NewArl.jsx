import React from "react";
import phone01 from "./Assests/Images/phone-01.jpg";
import phone02 from "./Assests/Images/phone-02.jpg";
import phone03 from "./Assests/Images/phone-03.png";
import phone04 from "./Assests/Images/phone-04.jpg";
import phone05 from "./Assests/Images/phone-05.jpg";
import phone06 from "./Assests/Images/phone-06.jpg";

import wireless01 from "./Assests/Images/wireless-01.png";
import wireless02 from "./Assests/Images/wireless-02.png";
import wireless03 from "./Assests/Images/wireless-03.png";
import wireless04 from "./Assests/Images/wireless-04.png";


export default function NewA(){
    return(
        <>
         <div className="BigC">
        <h2>New Arrivals</h2>
        <div className="Bcont container text-center">
        <div className="row">
          <div className="BC1 col-sm-12 col-md-3">
         <div className="card">
  <img src={phone01} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Apple iPhone 12 Pro</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$799</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC2 col-sm-12 col-md-3">

         <div class="card">
  <img src={phone02} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Apple iPhone 12 Max</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$799</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC3 col-sm-12 col-md-3">
             <div class="card">
  <img src={phone03} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Realme 8</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$599</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>
        
{/* next row ----------------------------------------------------------------------- */}

<div className="Bc row">
          <div className="BC4 col-sm-12 col-md-3">
         <div class="card">
  <img src={phone04} alt="Sofa" class="product-img"/>
  <h4 class="product-name">One Plus Nord</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$799</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC5 col-sm-12 col-md-3">

         <div class="card">
  <img src={phone05} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Apple iPhone 13 Pro</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$899</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC6 col-sm-12 col-md-3">
             <div class="card">
  <img src={phone06} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Samsung Galaxy S22</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$699</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>
       {/* --------------Nxt row -------------------------- */}

       <div className="Bc row">
          <div className="BC4 col-sm-12 col-md-3">
         <div class="card">
  <img src={wireless01} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Beat Studio Wireless</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$199</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC5 col-sm-12 col-md-3">

         <div class="card">
  <img src={wireless02} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Beat EP Headphones</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$199</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC6 col-sm-12 col-md-3">
             <div class="card">
  <img src={wireless03} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Beat Black Headphones</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$169</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>

{/* ------------------nxt row------------------ */}

<div className="Bc row">
          <div className="BC7 col-sm-12 col-md-3">
         <div class="card">
  <img src={wireless04} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Beat Studio Wireless</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$199</div>
  <button class="add-to-cart">+</button>
</div>

</div>
















 
 </div> 

            </div>
            </div>


        </>
    )
}