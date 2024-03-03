import React from 'react';

function CartItem({ cartItems, onUpdateCart, onRemoveFromCart }) {
  const { id, name, quantity, price } = cartItems;
  const totalCost = quantity * price;
console.log("cartItems",cartItems);
  function handleQuantityChange(newQuantity) {
    onUpdateCart(id, newQuantity);
  }

  function handleRemoveFromCart() {
    onRemoveFromCart(id);
  }

  return (
    <li className="cart-item">
      <h3>{cartItems.name}HEllo</h3>
      <div>
        Quantity:
        <input
          type="number"
          value={cartItems.quantity}
          onChange={(event) => handleQuantityChange(event.target.value)}
        />
      </div>
      <div>
        Price per item: ${price.toFixed(2)}
        <br />
        Total cost: ${totalCost.toFixed(2)}
      </div>
      <button onClick={handleRemoveFromCart}>Remove from cart</button>
    </li>
  );
}

export default CartItem;