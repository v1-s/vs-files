import React from 'react';

function CartActions({ onCheckout }) {
  return (
    <div className="cart-actions">
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default CartActions;