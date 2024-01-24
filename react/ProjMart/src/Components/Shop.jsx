import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import table from './Assests/Images/table.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductD from "./ProductD";
import {products } from './products';
function ProductCard({ product, onSelect }) {

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
    onSelect(product);
    console.log(product);
  };
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
          <button className="add-to-cart">+</button>
        </div>
      </div>
    </div>
  );
}

export default function Shop(){
  const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);
   

    const handleProductSelect = (product) => {
      setSelectedProduct(product);
      console.log("HAndle",product)
    };
   
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
  );;
    
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
      <div className="Bcont container text-center">
        <div className="Br row">
        {filteredProducts.map(product => (
    <ProductCard key={product.id} product={product} onSelect={() => navigate(`/product/${product.id}`)}/>
))}


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
       </div>
       </div></div>
  </>
    )
}