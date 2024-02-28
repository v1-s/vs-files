import React, { useState } from 'react';
import CartItem from './CartItem';

const CartPage = ({ cartItems, onRemoveItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price based on cart items
  React.useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={() => onRemoveItem(item.id)} />
      ))}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

