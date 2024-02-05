import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductCard({ product,onSelect, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  const handleClick = () => {
    onSelect(product);
  };
  return (
    <div className="BC1 col-sm-12 col-md-3">
      <div className="card">
        <div 
          className="product-card" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'} onClick={handleIconClick} />
            </div>
          )}
          <img src={props.selectedproduct.imgUrl} alt={product.productName} className="product-img"/>
          <h4 className="product-name">{product.productName}</h4>
          <div className="rating">
            ★★★★★
          </div>
          <div className="price">${product.price}</div>
          <button className="add-to-cart" onClick={() => onAddToCart(product)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;









































// import React from "react";
// import table from './Assests/Images/table.jpg';
// import { products } from "./products";
// import { Link } from 'react-router-dom';
// import { useState,useEffect } from "react";

// export default function ProductD(selectedProduct){
	// const[product,setProduct]=useState(null);
	// const id = 1; // replace with your actual id

	// useEffect(() => {
	//   const fetchProduct = async () => {
	// 	// simulate a fetch with a delay
	// 	await new Promise(resolve => setTimeout(resolve, 1000));
	// 	const data = products.find(product => product.id === id);
	// 	console.log(setProduct(data));
	//   };
  
	//   fetchProduct();
	// }, [id]);
  
	// const [selectedCategory, setSelectedCategory] = useState('all'); 
	// const [mobile, setMobile] = useState([]);
	// const [sofa, setSofa] = useState([]);
	// const [watch, setWatch] = useState([]);
	// const [chair, setChair] = useState([]);
    // return(

  






{/* <div className="Container">
        <div className="Row" style={{backgroundColor:'blue'}}>
          {selectedCategory === 'all' && products.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  Discount={product.discount}
                  Description={product. description}
                  ShortDesc={product.shortDesc}
                  
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'mobile' && mobile.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === "sofa" && sofa.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

          {selectedCategory === 'chair' && chair.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}

        {selectedCategory === "watch" && watch.map((product) => (
            <div className="column" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    //   return(
    //    <>
    //   {selectedProduct && (
    //     <div className="product1">
    //       <h1 className="product-name">{selectedProduct.productName}</h1>
    //       <img className="product-name" src={selectedProduct.imgUrl} alt={selectedProduct.productName} />
    //       <p className="product-description">{selectedProduct.description}</p>
    //       <h2 className="product-price">{selectedProduct.price}</h2>
    //       <button className="add-to-cart">Add to Cart</button>
    //     </div>
    //   )}

    // </>
    // )
    //   }










         {/* {selectedProduct && <h1 className="product-name">{selectedProduct.productName}</h1>}

          <div class="background-image"> */}
         {/* <img src={table} alt=" table background" className="Shopbgrnd"/>  */}
   {/* <div className="overlay container-fluid">
    <h1 className="ShTitle">
      {product.productName}
    </h1>
  </div> 
  <div className="product1">
  <h1 className="product-name">{selectedProduct.productName}</h1>
  {console.log(<h1>{selectedProduct.productName}</h1>)}
  <img className="product-name"/>{selectedProduct.imgUrl}
            <p className="product-description">{selectedProduct.description}</p>
            <h2 className="product-price">{selectedProduct.price}</h2>
            <button className="add-to-cart">Add to Cart</button>
</div> 
</div> 
</>

)
} */}
