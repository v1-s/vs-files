import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {products} from './products';
import table from './Assests/Images/table.jpg';
// import Sofa from './Assests/Images/double-sofa-01.png';


function ProductDetails({ onSelect, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);


  const [isLoading, setIsLoading] = useState(true); // Add loading state
  // ... other states

  useEffect(() => {
    console.log("Extracted id from URL:", id); 
    setIsLoading(true); // Set loading state to true
    const product = products.find((item) => item.id === id);
    console.log("product id", product?.id);

    if (product) {
      setFetchedProduct(product);
      console.log("fetched product",product.id);
    } else {
      console.error(`Product with ID ${id} not found!`);
      // Handle product not found case here
    }
    setIsLoading(false); // Set loading state to false after fetching
  }, [id]);


  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  const handleClick = () => {
    onSelect(fetchedProduct); // Pass the fetched product to the parent component
    navigate(`/product/${fetchedProduct.id}`)
  };

  // if (!fetchedProduct) {
  //   return <div>Loading product details...</div>; // Display a loading indicator
  // }

  return (
  <>
{isLoading ? (
        <div>Loading product details...</div>
      ) : fetchedProduct ? (
        // Render product details using fetchedProduct
      
    <div className="ProdDetails">
       { fetchedProduct && (
            <>
            <div class="background-image">
        <img src={table} alt=" table background" className="Shopbgrnd"/>
  <div className="overlay container-fluid">
    <h1 className="ProductTitle">
        {/* Product */}
        {fetchedProduct.productName}
    </h1>
  </div> 
</div>
                    <div key={fetchedProduct.id} className="ProdD col-sm-12 col-md-3">
                  <div className="card1">
                        <div className="product-card">
                        {/* <div className="product-id">{fetchedProduct.id}</div> */}
                          <div className='ProImg'>
                          <img src={fetchedProduct.imgUrl} alt={fetchedProduct.productName} className="product-img1" />
                         
                          <div className='ProDesc'>
                          <h2 className="product1-name">{fetchedProduct.productName}</h2>
                          <div className="rating">★★★★★</div>
                          <div className="price">{fetchedProduct.reviews.rating}</div>
                          <div className="price">${fetchedProduct.price}</div>
                          <div className="price">Category:{fetchedProduct.category}</div>
                          <div className="price">{fetchedProduct.shortDesc}</div>
                          <div className="price">${fetchedProduct.avgRating}</div>
                          <div className='Price'>
                          <div className='Price'><input type='text'></input></div>
                          <button className="checkout-button">Add to Cart</button>
                         </div>
                         </div>
                          <div className="price">${fetchedProduct.description}</div>
                        </div>
                        </div>
                      </div>
                    </div></>
      )
          }
   </div>  
   ) : (
    // Handle product not found case here
    <h1>Not Loadinggggg......</h1>
  )
  } 

    </>
  );
}

export default ProductDetails;





 {/* {isHovered && (
                            <div className="wishlist-icon">
                              <FontAwesomeIcon icon={faHeart} color={isInWishlist ? 'red' : 'black'} onClick={handleIconClick} />
                            </div>
                          )} */}























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
