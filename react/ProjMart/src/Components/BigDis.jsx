import React from "react";
import { useEffect } from "react";
import sofa from './Assests/Images/double-sofa-01.png';
export default function BigD(){
    // useEffect
    return(
        <>
        <div className="Big">
        <h2>Big Discount</h2>
        <div class="BigC container text-center">
             <div class="Br row">
         <div class="BC1 col">
         <div class="card">
  <div class="discount-tag">30% Off</div>
  <img src={sofa} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Stone and Beam Westview</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div class="BC2 col">

         <div class="card">
  <div class="discount-tag">30% Off</div>
  <img src={sofa} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Stone and Beam Westview</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div class="BC3 col">
             <div class="card">
  <div class="discount-tag">30% Off</div>
  <img src={sofa} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Stone and Beam Westview</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>
        </div>



        </div>
        </>
    )
}