import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import sofa from './Assests/Images/double-sofa-01.png';
import bmod from './Assests/Images/double-sofa-02.png';
import chair from './Assests/Images/arm-chair-02.jpg';
import chair4 from './Assests/Images/arm-chair-03.jpg';
import chair5 from './Assests/Images/phone-03.png';
import chair6 from './Assests/Images/phone-04.jpg';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default function BigD(){
    const [isHovered, setIsHovered] = useState(false);
   
    return(
        <>
           
    
        <div className="Big">
        <h2>Big Discount</h2>
        <div className="Bcont container text-center">
        <div className="row">
          <div className="BC1 col-sm-12 col-md-3">
         <div className="card">
  <div class="discount-tag">30% Off</div>
  <div 
      className="product-card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
     >
      {isHovered && (
        <div className="wishlist-icon">
          <FontAwesomeIcon icon={faHeart} size="xl"/>
        </div>
      )}
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
         <div className="BC2 col-sm-12 col-md-3">

         <div class="card">
  <div class="discount-tag">20% Off</div>
  <img src={bmod} alt="Sofa" class="product-img"/>
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
  <div class="discount-tag">15% Off</div>
  <img src={chair} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Baltsar Chair</h4>
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
  <div class="discount-tag">30% Off</div>
  <img src={chair4} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Helmar Chair</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$193</div>
  <button class="add-to-cart">+</button>
</div>

         </div>
         <div className="BC5 col-sm-12 col-md-3">

         <div class="card">
  <div class="discount-tag">20% Off</div>
  <img src={chair5} alt="Sofa" class="product-img"/>
  <h4 class="product-name">Realme 8</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$253</div>
  <button class="add-to-cart">+</button>
</div>


         </div>
         <div className="BC6 col-sm-12 col-md-3">
             <div class="card">
  <div class="discount-tag">15% Off</div>
  <img src={chair6} alt="Sofa" class="product-img"/>
  <h4 class="product-name">One Plus Nord</h4>
  <div class="rating">
    ★★★★★
  </div>
  <div class="price">$89</div>
  <button class="add-to-cart">+</button>
</div>
         </div>
            </div>
       




























            </div>

        </div>
        </>
    )
}