import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import table from './Assests/Images/table.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductD from "./ProductD";
import {products } from './products';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";


function ProductCard({ product, handleProduct,onAddToCart }) {

  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const handleIconClick = () => {
    setIsInWishlist(!isInWishlist);
  };
  const handleAddToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  }
  const handleClick = () => {
    handleProduct(product);
    console.log(product);
  };
  const [cart, setCart] = useState([]);
  
  
return (
    <div className="BC1 col-sm-12 col-md-3" >
      <div className="card" onClick={handleClick}>
      
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
          <img src={product.imgUrl} alt="Sofa" className="product-img"/>
          <h4 className="product-name">{product.productName}</h4>
          <div className="rating">
            ★★★★★
          </div>
          <div className="price">${product.price}</div>
          <button className="add-to-cart" onClick={() =>onAddToCart(product)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default function Shop(){
    const handleProduct = (product) => {
      setSelectedProduct(product);
      navigate('/ProductCard'); // Assuming your product details route is '/product-details'
    };
    

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
 const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
    const [selectedProduct, setSelectedProduct] = useState(null);
    // const handleProductClick = (product) => {
    //   setSelectedProduct(product);
    //   console.log("Handle",selectedProduct)
    // };
   
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCategoryClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
    setIsOpen(false);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const firstSetOfProducts = products.slice(0,25); // first 8 products 
  const filteredProducts = firstSetOfProducts.filter(product => selectedCategory === 'All' || product.category === selectedCategory).filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
    return (
        <>
        <div class="background-image">
        <img src={table} alt=" table background" className="Shopbgrnd"/>
  <div className="overlay container-fluid">
    <h1 className="ShTitle">
        Product
    </h1>
  </div> 
</div>
<div className="Shpproducts">
<div className="container mt-5">
    <div className="row">
      <div className="col-md-3">
        {/* <!-- Dropdown --> */}
        <div className={`dropdown ${isOpen ? 'show' : ''}`} onClick={toggleOpen}>
          <button className="Fbtn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Filter By Category
          </button>
          <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            {/* <!-- Add your categories here --> */}
            <a className="dropdown-item" onClick={() => handleCategoryClick('All')}>All</a>
          <a className="dropdown-item" onClick={() => handleCategoryClick('sofa')}>Sofa</a>
          <a className="dropdown-item" onClick={() => handleCategoryClick('chair')}>Chair</a>
          <a className="dropdown-item" onClick={() => handleCategoryClick('watch')}>Watches</a>
          <a className="dropdown-item" onClick={() => handleCategoryClick('mobile')}>Mobiles</a>
          <a className="dropdown-item" onClick={() => handleCategoryClick('wireless')}>Wireless</a>
           </div>
        </div>
      </div>
      <div class="col-md-8">
        {/* <!-- Search Bar --> */}
        <div class="input-group">
        <input type="text" className="form-control" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
  <div className="input-group-append">
    <button className="btn" type="button">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  </div>
        </div>
      </div>
    </div>
  </div>
      {/* <div className="Bcont container text-center">
        <div className="Br row"> */}








        <div className="Bcont container text-center">
      <div className="Br row">
          {filteredProducts.map(product => (
           <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))} 
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => handleProduct(product)}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
      {selectedProduct && <ProductD selectedProduct={selectedProduct} />}
    </div>
    </div>
       

        {/* {filteredProducts.map(product => (
      <div onClick={() =>onSelect(product)}>
        <ProductCard key={product.id} product={product} onAddToCart={addToCart}  onSelect={onSelect} />
      </div>
    ))}
     </div> */}
    {/* {selectedProduct && <ProductD selectedProduct={selectedProduct} />} */}
  {/* {selectedProduct && (
  <ProductD selectedProduct={selectedProduct} />
)} */} 

      


       {/*  */}
      

       
       <div className='Footer-relative' >
        <div className="row">
          <div className="BF1 col-sm-12 col-md-3">
            <FontAwesomeIcon
              icon={faBagShopping}
              size="2xl"
              className="FLogo"
              style={{
                "--fa-primary-color": "#050505",
                "--fa-secondary-color": "#0a0a0a",
                "--fa-secondary-opacity": "1",
              }}
            />
            <a className="Ftitle">Mart</a>
            <div className="Fcontent">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, voluptates neque. Aut laborum qui adipisci quo hic
                modi quisquam? 
              </p>
            </div>
          </div>
          <div className="BF2 col-sm-12 col-md-3">
            <div className="Bcontent">
              <h5>About Us</h5>
              <div className="FcontA">
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cases</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="BF3 col-sm-12 col-md-3">
            <div className="BF3content">
              <h5>Customer Care</h5>
              <div className="FcontC">
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Returns & Refunds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="BF4 col">
            <div className="BF4content">
              <h5>Contact Us</h5>
              <div className="FcontD">
                <ul>
                    <li>70 Washington Square South,New York,NY 10012</li>
                    <li>United States </li>
                    <li>Email:example@gmail.com</li>
                    <li>Phone: +1 1123 456 780</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
      






  </>
    )
}






















           {/* {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onSelect={handleProductSelect}/>
           ))}
          {selectedProduct && 
            <div className="selected-product-details">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            </div>
           } */}

       {/* {selectedProduct && (
        <div className="selected-product-details">
            {console.log("HIiii",selectedProduct)}
          <h2>{selectedProduct.productName}</h2>
          <img src={selectedProduct.imgUrl} alt={selectedProduct.productName} />
          <p>${selectedProduct.price}</p> 
          <p>{selectedProduct.shortDesc}</p>
          <p>{selectedProduct. description}</p> */}
          {/* <p>{selectedProduct. reviews}</p> */}
          {/* <button onClick={closeModal}>Close</button>
         </div>
     )}  */}