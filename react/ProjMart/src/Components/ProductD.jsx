import React from "react";
import table from './Assests/Images/table.jpg';
import { products } from "./products";
export default function ProductD(){
    return(
        <>
         <div class="background-image">
        <img src={table} alt=" table background" className="Shopbgrnd"/>
  <div className="overlay container-fluid">
    <h1 className="ShTitle">
      {products.productName}
    </h1>
  </div> 
  <h1 className="product-name">{products.productName}</h1>
            <p className="product-description">{products.productDescription}</p>
            <h2 className="product-price">{products.productPrice}</h2>
            <button className="add-to-cart">Add to Cart</button>
</div>
        </>
    )
}