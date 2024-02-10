import React from 'react';
import QtyInput from './QtyInput'; // Import QtyInput here

const Product = ({ product, quantity, addToCart }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <QtyInput value={quantity} onChange={(e) => addToCart(product, parseInt(e.target.value))} />
      </div>
    </div>
  );
};

export default Product;