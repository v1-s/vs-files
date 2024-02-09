import React, { createContext, useState, useEffect } from 'react';
import productsData from '../products'; // Assuming correct path to product data
import discountProductsData from '../products'; // Assuming correct path to discount data
import serviceData from '../products'; // Assuming correct path to service data
import SliderData from '../products'; // Assuming correct path to slider data




const getDefaultCart =()=>{
    let cart={};
    for(let index =0;index < products.length;index++){
        cart[index]=0;
    }
    return cart;
  }
const ProductContext = createContext({
  products: [], // Initial empty state for products
  filteredProducts: [], // Add filtered products state
  discountProducts: [], // Add discount products state
  serviceData: [], // Add service data state
  sliderData: [], // Add slider data state
  searchQuery: '', // Add search query state
  currentCategory: '', // Add current category state
  addToCart: (product) => {}, // Add addToCart function state
  removeFromCart: (product) => {}, // Add removeFromCart function state
  updateQuantity: (product, quantity) => {}, // Add updateQuantity function state
  clearCart: () => {}, // Add clearCart function state
});

const ProductContextProvider = ({ children }) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');

  // Fetch product data (adapt fetching logic and error handling as needed)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('your-product-data-endpoint'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle errors gracefully
      }
    };

    fetchProducts();
  }, []);

  // Add other data fetch methods as needed (discountProducts, serviceData, sliderData)

  const addToCart = (product) => {
    // Implement cart-related logic and state updates
    // ...
    setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
  };

  const removeFromCart = (product) => {
    // Implement cart-related logic and state updates
    // ...
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
  };

  const updateQuantity = (product, quantity) => {
    // Implement cart-related logic and state updates
    // ...
  };

  const clearCart = () => {
    // Implement cart-related logic and state updates
    // ...
  };

  const contextValue = {
    products,
    filteredProducts,
    discountProducts,
    serviceData,
    sliderData,
    searchQuery,
    currentCategory,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setSearchQuery, // Add function to update search query
    setCurrentCategory, // Add function to update current category
    // Add other functions as needed
  };

  // Handle filtering, searching, and category-based logic here
 
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

