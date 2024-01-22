import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {discoutProducts } from './products';
function ProductCard({ product }) {
    console.log(product);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="BC1 col-sm-12 col-md-3">
      <div className="card">
        <div className="discount-tag">30% Off</div>
        <div 
          className="product-card" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          )}
          <img src={product.imgUrl} alt="Sofa" className="product-img"/>
          <h4 className="product-name">{product.productName}</h4>
          <div className="rating">
            ★★★★★
          </div>
          <div className="price">${product.price}</div>
          <button className="add-to-cart">+</button>
        </div>
      </div>
    </div>
  );
}

export default function Big() {
  return (
    <div className="Big">
      <h2>Big Discount</h2>
      <div className="Bcont container text-center">
        <div className="Br row">
          {discoutProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
