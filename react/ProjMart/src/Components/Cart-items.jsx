import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ProductContext } from "./Context/MartContext";
import { CartContext } from './Context/CartContext';
import Cart from './Cart';
// import { CartItem as CartItemComponent } from './Cart'; // Import the correct CartItem component

export const CartItem = ({ toggleCart }) => {
  const { cartItems, handleRemoveItem, updateQuantity, checkout,addToCart} = useContext(CartContext);
  const { onSelect, selectedId } = useContext(ProductContext);

  const handleAddToCartFromProduct = (newProduct, newQuantity) => {
    onSelect(newProduct.id);
    addToCart(newProduct, newQuantity);
    toggleCart();
  };

  return (
    <Cart
      cartItems={cartItems}
      handleRemoveItem={handleRemoveItem}
      updateQuantity={updateQuantity}
      checkout={checkout}
      onSelect={onSelect}
      selectedId={selectedId}
      handleAddToCartFromProduct={handleAddToCartFromProduct}
    />
  );
};





















// import React, { useState, useContext, useParams, useEffect,useNavigate } from 'react';
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
// import { products } from './products' // Import products here
// import ProductDetails from './ProductD';
// import Product from './ProdCart';
// import { ProductContext } from "./Context/MartContext"
// import { CartContext } from './Context/CartContext' // Import the CartContext here

// export const CartItem = ({ product, quantity, addToCart, toggleCart }) => {
//     const { cartItems, handleRemoveItem, updateQuantity, checkout } = useContext(CartContext)
  
//     const handleAddToCartFromProduct = (newProduct, newQuantity) => {
//       addToCart(newProduct, newQuantity)
//       toggleCart()
//     }
  
//     const [isCartOpen, setIsCartOpen] = useState(false)
  
//  const toggleCartFunc = () => setIsCartOpen(!isCartOpen)
  
//     return (
//       <>     
//         <button className="cart-icon" onClick={toggleCartFunc}>
//           {/* <FontAwesomeIcon icon={faShoppingBag} /> {cartItems.length} */}
//         </button>
//         <ProductDetails {...addToCart} />
//         <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
//         {isCartOpen && (
//           <div className="cart-overlay">
//             <div className="cart-container">
//               <h2>Your Cart</h2>
  
//               {cartItems.length > 0 ? (
//                 <ul className="cart-items">
//                   {cartItems.map((item) => (
//                     <CartItem
//                       key={item.id}
//                       item={item}
//                       handleRemoveItem={handleRemoveItem}
//                       updateQuantity={updateQuantity}
//                     />
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="cart-empty">Your cart is empty.</p>
//               )}

// <li key={product.id} className="cart-item">
//         <img src={product.image} alt={product.name} className="cart-item-image" />
//         <div className="cart-item-details">
//           {/* ... */}
//           <Link to="/" className="remove-item" onClick={toggleCart}>
//             <button>
//               <FontAwesomeIcon icon={faHeart} /> Remove
//             </button>
//           </Link>
//         </div>
//       </li>





  
//               {cartItems.length > 0 && (
//                 <div className="cart-summary">
//                   <p>Cart Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
//                   <button onClick={checkout}>Checkout</button>
//                 </div>
//               )}
  
//               <Link to="/" className="close-cart" onClick={toggleCartFunc}>
//                 <span>&times;</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </>
//     )
//   }