import React from "react";
// In ProductCard

export default function Cart({ cart }) {
    return (
      <>
        <h1>AC</h1>
        {console.log(cart)}
       
        {/* {cart && cart.map((product,index) => (
          <div key={index}>
            <h3>{product.productName}</h3>
            {console.log("pr",product.productName)}
            {/* Display other product details here */}
          {/* </div> */}
        {/* ))} */}
      </>
    );
  }
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext'; // Import context (replace with your context path)

// const Cart = () => {
  // const { cartItems, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext);

//   const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               <div className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div className="item-details">
//                   <h3>{item.name}</h3>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <div className="quantity-selector">
//                     <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                   </div>
//                   <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && (
//         <div className="cart-summary">
//           <p>Cart Total: ${cartTotal}</p>
//           <button onClick={checkout}>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



