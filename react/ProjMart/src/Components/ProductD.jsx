import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from './products';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import table from './Assests/Images/table.jpg';
import { CartContext,CartProvider } from '../Components/CartContext';

const ProductDetails = ({ cartItems, setCartItems }) => {
  const { state, dispatch } = useContext(CartContext);

  const navigate = useNavigate();

  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(id || 'default-id');
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Extracted id from URL:', id);
    setIsLoading(true);
    const product = products.find((item) => item.id === id);
    console.log("product", product);

    if (product) {
      setFetchedProduct(product);
      const category = product.category;
      const filteredProducts = products.filter(
        (item) => item.category === category && item.id !== id
      );
      setSimilarProducts(filteredProducts);
    } else {
      console.error(`Product with ID ${id} not found!`);
    }
    setIsLoading(false);
  }, [id]);

  const addItemToCart = async (product, quantity) => {
    try {
      const updatedCartItems = [...cartItems, { ...product, quantity }];
      setCartItems(updatedCartItems);
      alert("product got added");
      console.log("updated",updatedCartItems);
      navigate('/cart');
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading product details...</div>
      ) : fetchedProduct ? (
        <div className="ProdDetails">
          {fetchedProduct && (
            <>
              <div class="background-image">
                <img src={table} alt=" table background" className="Shopbgrnd" /><div className="overlay container-fluid">
                  <h1 className="ProductTitle">
                    {/* Product */}
                    {fetchedProduct.productName}
                  </h1>
                </div>
              </div>
              <div
                key={fetchedProduct.id}
                className="ProdD col-sm-12 col-md-3"
              >
                <div className="card1">
                  <div className="product-card">
                    {/* <div className="product-id">{fetchedProduct.id}</div> */}
                    <div className="ProImg">
                      <img
                        src={fetchedProduct.imgUrl}
                        alt={fetchedProduct.productName}
                        className="product-img1"
                      />
                      <div className="ProDesc">
                        <h2 className="product1-name">
                          {fetchedProduct.productName}
                        </h2>
                        <div className="rate-price">
                          <div className="rating">★★★★★</div>
                          <div className="Re-price">
                            {fetchedProduct.avgRating}{' '}
                ratings
                          </div>
                        </div>
                        <div className="rate-price">
                          <div className="price">
                            ${fetchedProduct.price}
                          </div>
                          <div className="categPrice">
                            Category:
                            {fetchedProduct.category}
                          </div>
                        </div>
                        <div className="proDesc">
                          {fetchedProduct.shortDesc}
                        </div>
                      </div>
                    </div>
                    <div className="cart-actions">
                      <input
                        className="Pro-count"
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(parseInt(e.target.value) || 1)
                        }
                      />
                      <br/>

                        <button
                          onClick={() =>
                            addItemToCart(fetchedProduct, quantity)
                            +1
                          }
                        >
                          Add to cart
                        </button>
                  
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <h1>Not Loadinggggg......</h1>
      )}
    </>
  );
};

export default ProductDetails;
















































// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { products } from './products';
// import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import table from './Assests/Images/table.jpg';
// import { CartContext } from './CartContext';

// const ProductDetails = ({ onSelect, linkTo, addItemToCart, product }) => {
//   const { state, dispatch } = useContext(CartContext);

//   const navigate = useNavigate();

//   const { id } = useParams();
//   const [selectedId, setSelectedId] = useState(id || 'default-id');
//   const [fetchedProduct, setFetchedProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     console.log('Extracted id from URL:', id);
//     setIsLoading(true);
//     const product = products.find((item) => item.id === id);
//     console.log("product", product);

//     if (product) {
//       setFetchedProduct(product);
//       const category = product.category;
//       const filteredProducts = products.filter(
//         (item) => item.category === category && item.id !== id
//       );
//       setSimilarProducts(filteredProducts);
//     } else {
//       console.error(`Product with ID ${id} not found!`);
//     }
//     setIsLoading(false);
//   }, [id]);

//   const addToCartAndNavigate = async (product, quantity) => {
//     try {
//       await addItemToCart(product, quantity);
//       navigate('/cart');
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };

//   return (
//     <>
//       {isLoading ? (
//         <div>Loading product details...</div>
//       ) : fetchedProduct ? (
//         <div className="ProdDetails">
//           {fetchedProduct && (
//             <>
//               <div class="background-image">
//                 <img src={table} alt=" table background" className="Shopbgrnd" />
//                 <div className="overlay container-fluid">
//                   <h1 className="ProductTitle">
//                     {/* Product */}
//                     {fetchedProduct.productName}
//                   </h1>
//                 </div>
//               </div>
//               <div
//                 key={fetchedProduct.id}
//                 className="ProdD col-sm-12 col-md-3"
//               >
//                 <div className="card1">
//                   <div className="product-card">
//                     {/* <div className="product-id">{fetchedProduct.id}</div> */}
//                     <div className="ProImg">
//                       <img
//                         src={fetchedProduct.imgUrl}
//                         alt={fetchedProduct.productName}
//                         className="product-img1"
//                       />
//                       <div className="ProDesc">
//                         <h2 className="product1-name">
//                           {fetchedProduct.productName}
//                         </h2>
//                         <div className="rate-price">
//                           <div className="rating">★★★★★</div>
//                           <div className="Re-price">
//                             {fetchedProduct.avgRating}{' '}
//                 ratings
//                           </div>
//                         </div>
//                         <div className="rate-price">
//                           <div className="price">
//                             ${fetchedProduct.price}
//                           </div>
//                           <div className="categPrice">
//                             Category:
//                             {fetchedProduct.category}
//                           </div>
//                         </div>
//                         <div className="proDesc">
//                           {fetchedProduct.shortDesc}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="cart-actions">
//                       <input
//                         className="Pro-count"
//                         type="number"
//                         value={quantity}
//                         onChange={(e) =>
//                           setQuantity(parseInt(e.target.value) || 1)
//                         }
//                       />
//                       <br/>

//                         <button
//                           onClick={() =>
//                             addToCartAndNavigate(fetchedProduct, quantity)
//                           }
//                         >
//                           Add to cart
//                         </button>
                  
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       ) : (
//         <h1>Not Loadinggggg......</h1>
//       )}
//     </>
//   );
// };

// export default ProductDetails;
























// import React, {useContext, useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { products } from './products';
// import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import table from './Assests/Images/table.jpg';
// import {CartContext} from './CartContext';

// const ProductDetails = ({onSelect, linkTo,addItemToCart,product}) => {
//   const { state, dispatch } = useContext(CartContext);

//   const navigate=useNavigate();

//   const { id } = useParams();
//   const [selectedId, setSelectedId] = useState(id || 'default-id');
//   const [fetchedProduct, setFetchedProduct] = useState(null);
//   const [similarProducts, setSimilarProducts] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     console.log('Extracted id from URL:', id);
//     setIsLoading(true);
//     const product = products.find((item) => item.id === id);
//     console.log("product",product);
//     const handleGoToCart = async (product, quantity) => {
//       try {
//         await addItemToCart(product, quantity);
//         navigate('/cart');
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     };
//     if (product) {
//       setFetchedProduct(product);
//       const category = product.category;
//       const filteredProducts = products.filter(
//         (item) => item.category === category && item.id !== id
//       );
//       setSimilarProducts(filteredProducts);
//     } else {
//       console.error(`Product with ID ${id} not found!`);
//     }
//     setIsLoading(false);
//   }, [id]);
  
  
// return(
//   <>
 
// {isLoading ? (
//         <div>Loading product details...</div>
//       ) : fetchedProduct ? (
        
//         // Render product details using fetchedProduct
      
//     <div className="ProdDetails">
//        { fetchedProduct &&(
//             <>
//             <div class="background-image">
//         <img src={table} alt=" table background" className="Shopbgrnd"/>
//   <div className="overlay container-fluid">
//     <h1 className="ProductTitle">
//         {/* Product */}
//         {fetchedProduct.productName}
//     </h1>
//   </div> 
// </div>            <div key={fetchedProduct.id} className="ProdD col-sm-12 col-md-3">
//                   <div className="card1">
//                         <div className="product-card">
//                         {/* <div className="product-id">{fetchedProduct.id}</div> */}
//                           <div className='ProImg'>
//                           <img src={fetchedProduct.imgUrl} alt={fetchedProduct.productName} className="product-img1" />
                         
//                           <div className='ProDesc'>
//                           <h2 className="product1-name">{fetchedProduct.productName}</h2>
//                           <div className="rate-price">
//                           <div className="rating">★★★★★</div>
//                           <div className="Re-price">{fetchedProduct.avgRating}  ratings</div>
                          
//                           </div>
//                           <div className="rate-price">
//                           <div className="price">${fetchedProduct.price}</div>
//                           <div className="categPrice">Category:{fetchedProduct.category}</div>
//                           </div>
//                           <div className="proDesc">{fetchedProduct.shortDesc}</div>
                        
//                           <div className='cart-actions'>
//                           <input
//         className='Pro-count'
//         type='number'
//         value={quantity}
//          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//           />
//           <br />
//           {addItemToCart?(
//           <button onClick={() => handleGoToCart(fetchedProduct, quantity)}>
//           Add to cart
//         </button>
//           ) : (
//             <p>Loading...</p>
//           )}
        

//         </div>
//                           </div>
//                         </div>
//                            </div>
//                           <div className="proLDesc"><h5>Product Description:</h5><p>{fetchedProduct.description}</p></div>
//                           <div className="proRDesc"><h5>Reviews({fetchedProduct.reviews.length}):</h5>{fetchedProduct.reviews.map((review) => (<p>{review.text}</p> ))}</div>

                        
//                        </div>
//                       </div>
                  
//                     </>
                    
//       )
//           }
          
//    </div> 
    
//    ) : (
//     // Handle product not found case here
//     <h1>Not Loadinggggg......</h1>
//   )
//   }
    
// {fetchedProduct && similarProducts.length > 0 && (
//         <div className="similar-products">
//           <h5>You May Also Like </h5>
//           <div className="Prorow row flex-row flex-wrap gx-3 gy-3">
//             {similarProducts.map((product) => (
//               <div key={product.id} className="Pro-card col-lg-3 col-md-4 col-sm-6">
//                 <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
//                   <div className="card">
//                     <img src={product.imgUrl} alt={product.productName} className="product-img" />
//                     <h3 className="product-name">{product.productName}</h3>
//                     <div className="product-details">
//                     <div className="Pro-price">
//                           <div className="rating">★★★★★</div>
//                           <div className="Re-price">{product.avgRating}  ratings</div>
                          
//                           </div>
//                       <div className="price">${product.price}</div>

//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
     
//     </>
//   );
//             }

// export default ProductDetails;







