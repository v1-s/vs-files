import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from './products';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import table from './Assests/Images/table.jpg';
import onAddToCart from './Shop';


const ProductDetails = ({onSelect, linkTo,onAddToCart,product}) => {
  const navigate=useNavigate();
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(id || 'default-id');
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('Extracted id from URL:', id);
    setIsLoading(true);
    const product = products.find((item) => item.id === id);
    console.log("product",product);
      const handleGoToCart = (product,quantity) => {
        onAddToCart(product,quantity); // Add product to cart before navigating
        console.log("cartItems",cartItems)
        // navigate('/cart'); // Navigate to the cart page using react\-router\-dom
    };
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
  const handleGoToCart = async (product, quantity) => {
    try {
      await onAddToCart(product, quantity); 
      navigate('/cart');
    } catch (error) {
      console.error("Error adding to cart:", error);
  
    }
  }
  
return(
  <>
 
{isLoading ? (
        <div>Loading product details...</div>
      ) : fetchedProduct ? (
        
        // Render product details using fetchedProduct
      
    <div className="ProdDetails">
       { fetchedProduct &&(
            <>
            <div class="background-image">
        <img src={table} alt=" table background" className="Shopbgrnd"/>
  <div className="overlay container-fluid">
    <h1 className="ProductTitle">
        {/* Product */}
        {fetchedProduct.productName}
    </h1>
  </div> 
</div>            <div key={fetchedProduct.id} className="ProdD col-sm-12 col-md-3">
                  <div className="card1">
                        <div className="product-card">
                        {/* <div className="product-id">{fetchedProduct.id}</div> */}
                          <div className='ProImg'>
                          <img src={fetchedProduct.imgUrl} alt={fetchedProduct.productName} className="product-img1" />
                         
                          <div className='ProDesc'>
                          <h2 className="product1-name">{fetchedProduct.productName}</h2>
                          <div className="rate-price">
                          <div className="rating">★★★★★</div>
                          <div className="Re-price">{fetchedProduct.avgRating}  ratings</div>
                          
                          </div>
                          <div className="rate-price">
                          <div className="price">${fetchedProduct.price}</div>
                          <div className="categPrice">Category:{fetchedProduct.category}</div>
                          </div>
                          <div className="proDesc">{fetchedProduct.shortDesc}</div>
                        
                          <div className='cart-actions'>
                          <input
        className='Pro-count'
        type='number'
        value={quantity}
         onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
          <br />
          {onAddToCart?(
          <button onClick={handleGoToCart}>
            Add to Cart
          </button>
          ) : (
            <p>Loading...</p>
          )}
        

        </div>
                          </div>
                        </div>
                           </div>
                          <div className="proLDesc"><h5>Product Description:</h5><p>{fetchedProduct.description}</p></div>
                          <div className="proRDesc"><h5>Reviews({fetchedProduct.reviews.length}):</h5>{fetchedProduct.reviews.map((review) => (<p>{review.text}</p> ))}</div>

                        
                       </div>
                      </div>
                  
                    </>
                    
      )
          }
          
   </div> 
    
   ) : (
    // Handle product not found case here
    <h1>Not Loadinggggg......</h1>
  )
  }
    
{fetchedProduct && similarProducts.length > 0 && (
        <div className="similar-products">
          <h5>You May Also Like </h5>
          <div className="Prorow row flex-row flex-wrap gx-3 gy-3">
            {similarProducts.map((product) => (
              <div key={product.id} className="Pro-card col-lg-3 col-md-4 col-sm-6">
                <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                  <div className="card">
                    <img src={product.imgUrl} alt={product.productName} className="product-img" />
                    <h3 className="product-name">{product.productName}</h3>
                    <div className="product-details">
                    <div className="Pro-price">
                          <div className="rating">★★★★★</div>
                          <div className="Re-price">{product.avgRating}  ratings</div>
                          
                          </div>
                      <div className="price">${product.price}</div>

                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
     
    </>
  );
            }

export default ProductDetails;







  // const onAddToCart = (product, quantity) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);

  //   if (existingItem) {
  //     const updatedCartItems = cartItems.map((item) =>
  //       item.id === product.id
  //         ? { ...existingItem, quantity: existingItem.quantity + quantity }
  //         : item
  //     );
  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity }]);
  //   }




















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
