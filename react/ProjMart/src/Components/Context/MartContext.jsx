import React, { createContext, useState, useEffect } from 'react';
import {products} from '../products'; // Assuming correct path to product data
import {discountProducts} from '../products'; // Assuming correct path to discount data
import {serviceData} from '../products'; // Assuming correct path to service data
import {SliderData} from '../products'; // Assuming correct path to slider data

const getDefaultCart = () => {
  // Initialize cart with 0 quantity for each product
  let cart = {};
  for (let index = 0; index < products.length; index++) {
    cart[products[index].id] = 0;
    console.log("ADD",cart);
  }
  return cart;
};

export const ProductContext = createContext({
  products: [], // Initial empty state for products
  filteredProducts: [], // Add filtered products state
  discountProducts: [], // Add discount products state
  serviceData: [], // Add service data state
  sliderData: [], // Add slider data state
  searchQuery: '', // Add search query state
  currentCategory: '', // Add current category state
  cartItems: getDefaultCart(), // Add cart items state with correct initialization
  addToCart: (product) => {}, // Add addToCart function state
  removeFromCart: (product) => {}, // Add removeFromCart function state
  updateQuantity: (product, quantity) => {}, // Add updateQuantity function state
  clearCart: () => {}, // Add clearCart function state
  setSearchQuery: (query) => {}, // Add function to update search query
  setCurrentCategory: (category) => {}, // Add function to update current category
});

const ProductContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
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
        // Handle errors gracefully (e.g., display an error message)
      }
    };

    fetchProducts();
  }, []);

  // Add other data fetch methods as needed (discountProducts, serviceData, sliderData)

 const addToCart = (product) => {
    setCartItems((prev) => ({ ...prev, [product.id]: prev[product.id] + 1 }));
    console.log(`Added ${product.productName} to cart (quantity: ${cartItems[product]})`);
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => ({ ...prev, [product.id]: Math.max(prev[product.id] - 1, 0) }));
    console.log(`Removed ${product.productName} from cart (quantity: ${cartItems[product]})`);
  };

  const updateQuantity = (product, quantity) => {
    setCartItems((prev) => ({ ...prev, [product.id]: Math.max(quantity, 0) }));
    console.log(`Updated quantity of ${product.productName} to ${cartItems[product]}`);
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    console.log('Cart cleared');
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

