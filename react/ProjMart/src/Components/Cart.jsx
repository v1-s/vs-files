// import React, { useState, useContext, useParams, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
// import { products } from './products'
// import ProductDetails from './ProductD';
// import { ProductContext } from "./Context/MartContext"
// import { CartContext } from './Context/CartContext' // Import the CartContext here

// const CartItem = ({ item, handleRemoveItem, updateQuantity }) => {
//   const [productQuantity, setProductQuantity] = useState(item.quantity)

//   const handleChangeQuantity = (event) => {
//     const newQuantity = parseInt(event.target.value, 10)
//     setProductQuantity(Math.max(1, newQuantity)) // Enforce positive quantity
//     updateQuantity(item.id, newQuantity)
//   }

//   const { product, quantity } = useParams()

//   useEffect(() => {
//     if (product && quantity) {
//       // Handle adding product to cart based on query parameters
//     }
//   }, [product, quantity])

//   return (
//     <li key={item.id} className="cart-item">
//       <img src={item.image} alt={item.name} className="cart-item-image" />
//       <div className="cart-item-details">
//         <h3>{item.name}</h3>
//         <p>Price: ${item.price.toFixed(2)}</p>
//         <QtyInput value={productQuantity} onChange={handleChangeQuantity} />
//         <button onClick={() => handleRemoveItem(item.id)}>
//           <FontAwesomeIcon icon={faHeart} /> Remove
//         </button>
//       </div>
//     </li>
//   )
// }

// const QtyInput = ({ value, onChange }) => {
//   return (
//     <div className="quantity-input">
//       <button onClick={() => onChange({ target: { value: value - 1 } })}>
//         -
//       </button>
//       <input type="number" value={value} onChange={onChange} min={1} />
//       <button onClick={() => onChange({ target: { value: value + 1 } })}>
//         +
//       </button>
//     </div>
//   )
// }

// const Cart = ({ product, quantity, addToCart }) => {
//   const { cartItems, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext)

//   const handleAddToCartFromProduct = (newProduct, newQuantity) => {
//     addToCart(newProduct, newQuantity)
//   }

//   const [isCartOpen, setIsCartOpen] = useState(false)

//   const toggleCart = () => setIsCartOpen(!isCartOpen)

//   return (
//     <>
//       <button className="cart-icon" onClick={toggleCart}>
//         {/* <FontAwesomeIcon icon={faShoppingBag} /> {cartItems.length} */}
//       </button>
//       <ProductDetails {...addToCart} />
//       <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
//       {isCartOpen && (
//         <div className="cart-overlay">
//           <div className="cart-container">
//             <h2>Your Cart</h2>

//             {cartItems.length > 0 ? (
//               <ul className="cart-items">
//                 {cartItems.map((item) => (
//                   <CartItem
//                     key={item.id}
//                     item={item}
//                     handleRemoveItem={handleRemoveItem}
//                     updateQuantity={updateQuantity}
//                   />
//                 ))}
//               </ul>
//             ) : (
//               <p className="cart-empty">Your cart is empty.</p>
//             )}

//             {cartItems.length > 0 && (
//               <div className="cart-summary">
//                 <p>Cart Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
//                 <button onClick={checkout}>Checkout</button>
//               </div>
//             )}

//             <Link to="/" className="close-cart" onClick={toggleCart}>
//               <span>&times;</span>
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Cart;
import React, { useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { products } from './products'; // Import products here
import ProductDetails from './ProductD';
import Product from './ProdCart';
import { ProductContext, addToCart } from "./Context/MartContext";
import { CartContext } from './Context/CartContext'; // Import the CartContext here
import { CartItem } from './Cart-items';



const Cart = ({match}) => {
  const { cartItems, handleRemoveItem, updateQuantity, checkout, onSelect, selectedId } = useContext(CartContext);
  const [product, setProduct] = useState(null); // Store the fetched product
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(ProductContext);

  // function Cart({ match }) {
    // const { id } = useParams();
  // Fetch the product details based on the id from the URL
  useEffect(() => {
    if (id) {
      const fetchedProduct = products.find((product) => product.id === parseInt(id));
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setQuantity(1);
      } else {
        console.error(`Product with ID ${id} not found!`);
        navigate('/');
      }
    }
  }, [id, navigate]);

  const handleAddToCartFromProduct = (newProduct, newQuantity) => {
    if (onSelect) {
      onSelect(newProduct.id);
    }
    addToCart(newProduct, newQuantity);
    navigate("/cart");
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Pass toggleCart as a prop to the Cart component
  return (
    <>
      <CartItem toggleCart={toggleCart} />
      <button className="cart-icon" onClick={toggleCart}>
        {/* ... */}
      </button>
      {product && <Product product={product} quantity={quantity} addToCart={handleAddToCartFromProduct} />}
      {/* ... */}
    </>
  );
};

export default Cart;
//     <>
//      
//       {/* ... */}
//     </>
//   );
// };














































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



