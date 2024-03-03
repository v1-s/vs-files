import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {products } from './products';
// import AddToCart from './CartItem';
function ProductCard({ product }) {
    console.log(product);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  const handleAddToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  }
  return (
    <div className="BC1 col-sm-12 col-md-3">
      <div className="card">
      
        <div 
          className="product-card" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="wishlist-icon" >
              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'}  />
             
            </div>
          )}
          <img src={product.imgUrl} alt="Sofa" className="product-img" onClick={handleIconClick} />
          <h4 className="product-name">{product.productName}</h4>
          <div className="rating">
            ★★★★★
          </div>
          <div className="price">${product.price}</div>
          {/* <button className="add-to-cart">+</button> */}
          {/* <AddToCart product={product}/> */}
        </div>
      </div>
    </div>
  );
}

export default function NA() {
   
    const firstSetOfProducts = products.slice(11, 17); // first 8 products
  const secondSetOfProducts = products.slice(21, 25); // next 8 products
  return (
    <div className="BigC">
    <h2>New Arrivals</h2>
      <div className="Bcont container text-center">
        <div className="Br row">
          {firstSetOfProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {secondSetOfProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
       </div>
    </div>
  );
}
