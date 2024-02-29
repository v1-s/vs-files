import React, { useState } from 'react';
import CartItem from './CartItem'; // Import CartItem
// import ProductDetails from './ProductD';
// import AddToCart from './CartAdd';
import { Link } from 'react-router-dom';
import {useCartContext} from './Context/Cart'; // Import useCartContext
// import React, { useState } from 'react';
// import CartItem from './CartItem';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <div className="CartPage">
        <h1>Cart</h1>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onQuantityChange={updateCartItemQuantity}
          />
        ))}
        <div className="CartSummary">
          <div className="CartSubtotal">
            Subtotal: ${getTotalPrice().toFixed(2)}
          </div>
          <Link to="/checkout" className="CartCheckoutBtn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;

//   const CartPage = ({ cartItems, onRemoveItem }) => {
//   const [totalPrice, setTotalPrice] = useState(0);
//   React.useEffect(() => {
//     const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setTotalPrice(newTotalPrice);
//   }, [cartItems]);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 && <p>Your cart is empty.</p>}
//       {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} onRemove={() => onRemoveItem(item.id)} />
//       ))}
//       {cartItems.length > 0 && (
//         <div className="cart-summary">
//           <p>Total: ${totalPrice.toFixed(2)}</p>
//           <button>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

