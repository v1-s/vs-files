import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { products } from './products';
import Sofa from './Assests/Images/double-sofa-01.png'


function ProductDetails({ product,onSelect, onAddToCart }) {
  const { id } = useParams();
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const product = products.find((item) => item.id === id);
    if (product) {
      setFetchedProduct(product);
    } else {
      console.error(`Product with ID ${id} not found!`); // Handle missing product
    }
  }, [id]);

  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleClick = () => {
    onSelect(products); // Pass the fetched product to the parent component
  };

  // if (!fetchedProduct) {
  //   return <div>Loading product details...</div>; // Display a loading indicator
  // }

  return (
    <div className="BC1 col-sm-12 col-md-3" style={{ backgroundColor: 'blue' }}>
      <div className="product-id">{products[0].id}</div>

      <div className="card" onClick={handleClick}>
        <div className="product-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {isHovered && (
            <div className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'} onClick={handleIconClick} />
            </div>
          )}
          <img src={products[0].imgUrl} alt={products[0].productName} className="product-img" />
          <h4 className="product-name">{products[0].productName}</h4>
          <div className="rating">★★★★★</div>
          <div className="price">${products[0].price}</div>
          <button className="add-to-cart" onClick={() => onAddToCart(products)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;





























// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { products } from './products';
// import { useParams } from 'react-router-dom';
// // import {shop} from './Shop';

// function fetchProductDetailsById(id) {
//   return products.find((product) => product.id === id);
// }

// function ProductDetails({product,onSelect, onAddToCart }) {
//  const {id}=useParams();
//  const [fetchedProduct,setFetchedProduct]=useState(null);
//  useEffect(async () => {
//   // ...
//   const fetchedProduct = await fetchProductDetailsById(id);
//   setFetchedProduct(fetchedProduct);
//   // ...


//   return()=>{

//   }
// }, [id,fetchProductDetailsById]);
//   console.log("Pro",product);
//   const navigate = useNavigate();
//   const [isHovered, setIsHovered] = useState(false);
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   const handleIconClick = () => {
//     setIsInWishlist(!isInWishlist);
//   };
//   const handleClick = () => {
//     onSelect(product);
//     navigate(`/product/${product.id}`);
//   };
  


//   return (
//     <>
//     <div className="BC1 col-sm-12 col-md-3" style={{backgroundColor:'blue'}}>
//     <div className="product-id">{id}

//       {fetchedProduct&& (

//       <div className="card" onClick={handleClick}>
//         <div 
//           className="product-card" 
//           onMouseEnter={() => setIsHovered(true)} 
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {isHovered && (
//             <div className="wishlist-icon">
//               <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'} onClick={handleIconClick} />
//             </div>
//           )}
//           <img src={product.imgUrl} alt={product.productName} className="product-img"/>
//           <h4 className="product-name">{product.productName}</h4>
//           <div className="rating">
//             ★★★★★
//           </div>
       
// </div>

         
//           <div className="price">${product.price}</div>
         
//         </div>
       
//         )}
//          </div>
//       </div>
//  </>
//   );
// }

// export default ProductDetails;









































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
