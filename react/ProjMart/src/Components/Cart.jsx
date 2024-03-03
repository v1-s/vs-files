import React from 'react';
import CartItem from './Cartitems';
import CartSummary from './Cartsummary';
import CartActions from './CartActions';

function Cart({cartitems, onUpdateCart, onRemoveFromCart, onCheckout }) {
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <ul>
        {cartitems && cartitems.map((item) => (
                <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} onUpdateCart={onUpdateCart} />
              ))}
          {/* <Cartitems
            key={item.id}
            item={item}
            onUpdateCart={onUpdateCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))} */}
      </ul>
      {cartitems && <CartSummary cartitems={cartitems || []} />}
      <CartActions onCheckout={onCheckout} />
    </div>
  );
}

export default Cart;