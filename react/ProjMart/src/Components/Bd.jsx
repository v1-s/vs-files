import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {discoutProducts } from './products';

function ProductCard({ product, }) {
    console.log(product);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  return (
    <div className="BC1 col-sm-12 col-md-3">
      <div className="card" >
        <div className="discount-tag">30% Off</div>
        <div 
          className="product-card" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'}/>
            </div>
          )}
          <img src={product.imgUrl} alt="Sofa" className="product-img" onClick={handleIconClick}/>
          <h4 className="product-name">{product.productName}</h4>
          <div className="rating">
            ★★★★★
          </div>
          <div className="price">${product.price}</div>
       

        </div>
      </div>
    </div>
  );
}

export default function Big() {
  // const [cart,setCart] = useState([]);
  // const addToCart =(product) =>{
  //   setCart(currentCart => [...currentCart ,product]);
  // };
  return (
    <div className="Big">
      <h2>Big Discount</h2>
      <div className="Bcont container text-center">
        <div className="Br row">
          {discoutProducts.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}
