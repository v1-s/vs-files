import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {products } from './products';
function ProductCard({ product,handleAddToWishlist }) {
    console.log(product);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
    handleAddToWishlist();
  };

  
  return (
    <div className="BC1 col-sm-12 col-md-3">
      <div className="card" onClick={handleIconClick} >
        <div 
          className="product-card" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="wishlist-icon"onClick={handleAddToWishlist}>
              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'} />
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
function Navbar({wishlistCount}){
    return (
        <nav>
          <h1>My Website</h1>
          <div>Wishlist Count: {wishlistCount}</div>
        </nav>
      );
    }
export default function BS() {
    const [wishlistCount, setWishlistCount] = useState(0);
    const handleAddToWishlist = () => {
      setWishlistCount(wishlistCount + 1);
    };
    const firstSetOfProducts = products.slice(0,8); // first 8 products
  return (
    <>
    <Navbar wishlistCount={wishlistCount} />
    <div className="BsH">
          <h1>
              Best Sales
          </h1>
          <div className="Bcont container text-center">
              <div className="Br row">
                  {firstSetOfProducts.map(product => (
                      <ProductCard key={product.id} product={product} handleAddToWishlist={handleAddToWishlist}/>
                  ))}

              </div>
          </div>
      </div></>
  );
}
