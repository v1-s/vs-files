import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import {products } from './products';
function ProductCard({ product,handleAddToWishlist,handleAddToCart }) {
    console.log(product);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
    handleAddToWishlist();
  };
  // const Product = ({ product }) => {
  //   const [cart, setCart] = useState([]);
  
  //   const addToCart = () => {
  //     setCart(currentCart => [...currentCart, product]);
  //   };
  
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
          <button className="add-to-cart" onClick={()=> handleAddToCart(product)}>+</button>
        </div>
      </div>
    </div>
  );
}
// const Cart = ({ cart }) => (
//   <div>
//     <h2>Cart</h2>
//     {cart.map((product, index) => (
//       <div key={index}>
//         <h3>{product.title}</h3>
//         {/* Display other product details here */}
//       </div>
//     ))}
//   </div>
// );
export default function BS() {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cart , setCart] =useState([]);
    const handleAddToWishlist = () => {
      setWishlistCount(wishlistCount + 1);
    };
    const handleAddToCart =(product)=>{
      setCart(currentCart => [...currentCart,product]);
    }
    const firstSetOfProducts = products.slice(0,8); // first 8 products
  return (
    <>
    <div className="BsH">
          <h1>
              Best Sales
          </h1>
          <div className="Bcont container text-center">
              <div className="Br row">
                  {firstSetOfProducts.map(product => (
                      <ProductCard key={product.id} product={product} handleAddToWishlist={handleAddToWishlist}
                      handleAddToCart={handleAddToCart}/>
                  ))}

              </div>
          </div>
           <Cart cart={cart}/>
      </div></>
  );
}
