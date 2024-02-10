import React, { useState, useContext,useParams,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {products} from './products';
import ProductDetails from './ProductD';
import {ProductContext} from "./Context/MartContext";
// import { CartContext } from './Context/CartContext';
// Context for managing global cart state (replace with your implementation)
const CartContext = React.createContext();

const CartItem = ({ item, handleRemoveItem, updateQuantity }) => {
  const [productQuantity, setProductQuantity] = useState(item.quantity);

  const handleChangeQuantity = (event) => {
  const newQuantity = parseInt(event.target.value, 10);
    setProductQuantity(Math.max(1, newQuantity)); // Enforce positive quantity
    updateQuantity(item.id, newQuantity);
  };
  const { product, quantity } = useParams();

  useEffect(() => {
    if (product && quantity) {
      // Handle adding product to cart based on query parameters
    }
  }, [product, quantity]);
  return (
    <li key={item.id} className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <QtyInput value={productQuantity} onChange={handleChangeQuantity} />
        <button onClick={() => handleRemoveItem(item.id)}>
          <FontAwesomeIcon icon={faHeart} /> Remove
        </button>
      </div>
    </li>
  );
};

const QtyInput = ({ value, onChange }) => {
  return (
    <div className="quantity-input">
      <button onClick={() => onChange({ target: { value: value - 1 } })}>
        -
      </button>
      <input type="number" value={value} onChange={onChange} min={1} />
      <button onClick={() => onChange({ target: { value: value + 1 } })}>
        +
      </button>
    </div>
  );
};
// const Cart = ({ product, quantity, addToCart }) => {
//   const { cartItems, addToCart: addToCartFromContext, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext);

//   // Now, you can remove the unused "addToCart" prop from the Cart component

//   const handleAddToCartFromProduct = (newProduct, newQuantity) => {
//     addToCartFromContext(newProduct, newQuantity);
//   };

//   // Rest of the Cart component implementation remains the same
// };














const Cart = ({ product,quantity,addToCart,cartItems,handleRemoveItem, updateQuantity, checkout }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const {   setCart } = useContext(Cart);

  // const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Add context consumer based on your implementation
  // const { cartItems, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext);
  const handleAddToCartFromProduct = (newProduct, newQuantity) => {
    // Add logic to handle adding the new product with quantity to the cart
    addToCart(newProduct, newQuantity);
  };
  return (
    <>
      <button className="cart-icon" onClick={toggleCart}>
        {/* <FontAwesomeIcon icon={faShoppingBag} /> {cartItems.length} */}
      </button>
      <ProductDetails {...addToCart} />
{/* <Cart setCart={setCart} /> */}
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-container">
            <h2>Your Cart</h2>

            {/* {cartItems.length > 0 ? (
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleRemoveItem={handleRemoveItem}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </ul>
            ) : (
              <p className="cart-empty">Your cart is empty.</p>
            )} */}

            {/* {cartItems.length> 0 && (
              <div className="cart-summary"> */}
                {/* <p>Cart Total: ${cartTotal.toFixed(2)}</p> */}
                {/* <button onClick={checkout}>Checkout</button>
              </div>
            )} */}

            <Link to="/" className="close-cart" onClick={toggleCart}>
              <span>&times;</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
















































// import React, { useContext, useState } from 'react';

// import {cart} from './ProductD'; // Import context (replace with your context path)

// const cart = () => {
//   const { cartItems, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext);

//   // const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

// export default cart;



