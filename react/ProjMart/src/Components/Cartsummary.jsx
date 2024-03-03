import React from 'react';

function CartSummary({ Cartitem }) {
    // const [cartitems, setCartitems] = useState([]);
  const totalQuantity = Cartitem?Cartitem.reduce((total, item) => total + item.quantity, 0):0;
  const totalCost = Cartitem?Cartitem.reduce((total, item) => total + item.quantity * item.price, 0):0;

  return (
    <div className="cart-summary">
      <p>Total quantity: {totalQuantity}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
}

export default CartSummary;