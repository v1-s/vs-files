import React from "react";
export default function Cart({ cart }) {
    return (
      <>
        
        {console.log(cart)}
        {cart && cart.map((product,index) => (
          <div key={index}>
            <h3>{product.productName}</h3>
            {console.log("pr",product.productName)}
            {/* Display other product details here */}
          </div>
        ))}
      </>
    );
  }
