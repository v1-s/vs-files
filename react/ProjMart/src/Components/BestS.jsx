import React from "react";
import productImg01 from "./Assests/Images/double-sofa-01.png";
import productImg02 from "./Assests/Images/double-sofa-02.png";
import productImg03 from "./Assests/Images/double-sofa-03.png";

import productImg04 from "./Assests/Images/single-sofa-01.jpg";
import productImg05 from "./Assests/Images/single-sofa-02.jpg";
import productImg06 from "./Assests/Images/single-sofa-03.jpg";
import productImg007 from "./Assests/Images/single-sofa-04.png";

export default function BestS(){
    return(
        <>
     <div className="BsH">
        <h1>
          Best Sales
        </h1>
     <div className="Bcont container text-center">
        <div className="row">
          <div className="BC1 col-sm-12 col-md-3">
         <div className="card">
  <img src={productImg01} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Stone and Beam Westview</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC2 col-sm-12 col-md-3">

         <div class="card">
  <img src={productImg02} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Rivet Bigelow Modern</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$253</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC3 col-sm-12 col-md-3">
             <div class="card">
  <img src={productImg03} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Amazon Brand Modern Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$89</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>
        
{/* next row ----------------------------------------------------------------------- */}

<div className="Bc row">
          <div className="BC4 col-sm-12 col-md-3">
         <div class="card">
  <img src={productImg04} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Fully Sheep Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC5 col-sm-12 col-md-3">

         <div class="card">
  <img src={productImg05} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Faux Velvet Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$253</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC6 col-sm-12 col-md-3">
             <div class="card">
  <img src={productImg06} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Fully Sheep Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$89</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div> 
       {/* -----------Nxt Row----------------------------- */}
       <div className="Bc row">
          <div className="BS7 col-sm-12 col-md-3">
         <div class="card">
  <img src={productImg06} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Fully Sheep Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BS8 col-sm-12 col-md-3">

         <div class="card">
  <img src={productImg007} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Modern Arm Sofa</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$253</div>
  <button class="add-to-cart">+</button>
</div>


         </div>

</div>

























            </div>

         </div> 
        </>
    )
}