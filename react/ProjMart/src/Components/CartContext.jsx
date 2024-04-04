// src/context/CartContext.js

import React, { createContext, useContext, useState } from 'react';
import { products } from './products';
import Cart from './Cart';
const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (id) => {
    console.log('Adding item to cart:', id);
  
    // Find the product with the given id
    const product = products.find((item) => item.id === id);
  
    // If the product is found, update the cartItems array
    if (product) {
      const existingItem = cartItems.find((item) => item.id === id);
  
      if (existingItem) {
        increaseItemQuantity(id);
      } else {
        const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCartItems);
      }
    }
  };


  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const increaseItemQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const decreaseItemQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          removeItemFromCart(id);
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

//   const addItemToCart = (id) => {
//     console.log('Adding item to cart:', id);
  
//     // Find the product with the given id
//     const product = products.find(item => item.id === id);
  
//     // If the product is found, update the cartItems array
//     if (product) {
//       const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
//       setCartItems(updatedCartItems);
//     }
//   };
  


//   const removeItemFromCart = (id) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   const increaseItemQuantity = (itemId) => {
//     const updatedItems = cartItems.map((i) =>
//       i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
//     );
//     setCartItems(updatedItems);
//   };

//   const decreaseItemQuantity = (itemId) => {
//     const item = cartItems.find((i) => i.id === itemId);
//     if (item.quantity > 1) {
//       const updatedItems = cartItems.map((i) =>
//         i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
//       );
//       setCartItems(updatedItems);
//     } else {
//       removeItemFromCart(itemId);
//     }
//   };
const updateItemQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          removeItemFromCart(id);
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

//   const updateItemQuantity = (itemId, newQuantity) => {
//     const updatedItems = cartItems.map((i) =>
//       i.id === itemId ? { ...i, quantity: newQuantity } : i
//     );
//     setCartItems(updatedItems);
//   };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const contextValue = {
    state: cartItems,
    dispatch: addItemToCart,
    cartItems,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    getTotalAmount,
    updateItemQuantity,
  };

  return (
  <CartContext.Provider value={{ cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, updateItemQuantity, getTotalAmount }}>
  {children}
  {/* <Cart cartItems={cartItems} /> */}
   </CartContext.Provider>
  ) 

};

const useCartContext = () => useContext(CartContext);

export {CartContext, CartProvider, useCartContext };





//   <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;









// const addItemToCart = (id) => {
//     console.log('Adding item to cart:', id);
// // const updatedItems = [...cartItems, { ...item, quantity }];
// // setCartItems(updatedItems);
// };

// const addItemToCart = (item) => {
// const existingItem = cartItems.find((i) => i.id === item.id);

// if (existingItem) {
//   const updatedItems = cartItems.map((i) =>
//     i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//   );
//   setCartItems(updatedItems);
// } else {
//   setCartItems([...cartItems, { ...item, quantity: 1 }]);
// }
// };