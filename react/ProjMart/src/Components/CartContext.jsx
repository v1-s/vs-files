import React, { createContext, useReducer,useState,useEffect } from 'react';

const CartContext = createContext();

const initialState = {
cartItems: [], 
  inputValue:''
};

const cartReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case 'ADD_ITEM':
      
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),};

        // return { items: (state.items || []).filter(item => item.id !== action.payload) };
      
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0),
      };
      
      case 'ADD_TO_CART':
        // const { id, quantity } = action.payload;
        const { id, quantity, productName, imgUrl } = action.payload;
        const existingProduct = state.cartItems.find(item => item.id === id);
  
        if (existingProduct) {
          // If the product already exists in the cart, increase the quantity
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            ),
            totalCount: state.totalCount + action.payload.quantity, // Update total count
          };
        } 
        
        else {
          // If the product is not in the cart, add it with the specified quantity
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload }],
          };
        }
  
      
        case 'UPDATE_ITEM_QUANTITY':
          // const { id, quantity } = action.payload;
    
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === id ? { ...item, quantity: quantity } : item  
            ),
          };

      case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [cartValue, setCartValue] = useState(0);
  const [uniqueProductCount, setUniqueProductCount] = useState(0);

  
 useEffect(() => {
    // Calculate the total quantity whenever the cart items change
    const newTotalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartValue(newTotalQuantity);
  }, [state.cartItems]);

 
  const increaseItemQuantity = (itemId) => {
    // Instead of updating quantity directly in the cart items, dispatch an action
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId, newProductAdded: false });
  };

  const decreaseItemQuantity = (itemId) => {
    // Instead of updating quantity directly in the cart items, dispatch an action
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId, newProductAdded: false });
  };

  const addItemToCart = (item) => {
    // Check if the product is already in the cart
    const isProductInCart = state.cartItems.some(cartItem => cartItem.id === item.id);

    if (!isProductInCart) {
      // If it's a new product, add it to the cart and set newProductAdded to true
      dispatch({ type: 'ADD_TO_CART', payload: item, newProductAdded: true });
      setUniqueProductCount((prevCount) => prevCount + 1);
    } else {
      // If it's an existing product, just update the quantity
      dispatch({ type: 'INCREASE_QUANTITY', payload: item.id, newProductAdded: false });
    }
    
  };


const removeItemFromCart = (itemId) => {
  // Remove the item from the cart
  dispatch({ type: 'REMOVE_ITEM', payload: itemId });

  // Decrease uniqueProductCount by 1 when an item is removed
  setUniqueProductCount((prevCount) => prevCount - 1);
};

  const setInputValue = (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: value });
  };

  const getTotalQuantity = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalAmount = () => {
    return state.cartItems.reduce((total, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      console.log('Cart Items:', state.cartItems);
      return total + itemTotal;
    }, 0).toFixed(2);
  };
  

  return (
    <CartContext.Provider
      value={{
        
        cartItems: state.cartItems,
        inputValue: state.inputValue,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        setInputValue,
        getTotalAmount,
        uniqueProductCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider };





























// // // src/context/CartContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { products } from './products';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = (id) => {
//     const product = products.find((item) => item.id === id);

//     if (product) {
//       const existingItem = cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         increaseItemQuantity(id);
//       } else {
//         const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
//         setCartItems(updatedCartItems);
//       }
//     }
//   };

//   const removeItemFromCart = (id) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   const increaseItemQuantity = (id) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const decreaseItemQuantity = (id) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         if (item.quantity === 1) {
//           removeItemFromCart(id);
//         } else {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const updateItemQuantity = (id, newQuantity) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const getTotalAmount = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const contextValue = {
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     increaseItemQuantity,
//     decreaseItemQuantity,
//     updateItemQuantity,
//     getTotalAmount,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCartContext = () => useContext(CartContext);

// export { CartContext, CartProvider, useCartContext };







// import React, { createContext, useContext, useState } from 'react';
// import { products } from './products';
// import Cart from './Cart';
// const CartContext = createContext();

// const CartProvider = ({ children }) => {

//   const [cartItems, setCartItems] = useState([]);
//   const addItemToCart = (id) => {
//     console.log('Adding item to cart:', id);
  
//     // Find the product with the given id
//     const product = products.find((item) => item.id === id);
  
//     // If the product is found, update the cartItems array
//     if (product) {
//       const existingItem = cartItems.find((item) => item.id === id);
  
//       if (existingItem) {
//         increaseItemQuantity(id);
//       } else {
//         const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
//         setCartItems(updatedCartItems);
//       }
//     }
//   };


//   const removeItemFromCart = (id) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   const increaseItemQuantity = (id) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });

//     setCartItems(updatedCartItems);
//   };

//   const decreaseItemQuantity = (id) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         if (item.quantity === 1) {
//           removeItemFromCart(id);
//         } else {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//       }
//       return item;
//     });

//     setCartItems(updatedCartItems);
//   };


// const updateItemQuantity = (id) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         if (item.quantity === 1) {
//           removeItemFromCart(id);
//         } else {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//       }
//       return item;
//     });

//     setCartItems(updatedCartItems);
//   };

// //   const updateItemQuantity = (itemId, newQuantity) => {
// //     const updatedItems = cartItems.map((i) =>
// //       i.id === itemId ? { ...i, quantity: newQuantity } : i
// //     );
// //     setCartItems(updatedItems);
// //   };

//   const getTotalAmount = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const contextValue = {
//     state: cartItems,
//     dispatch: addItemToCart,
//     cartItems,
//     removeItemFromCart,
//     increaseItemQuantity,
//     decreaseItemQuantity,
//     getTotalAmount,
//     updateItemQuantity,
//   };

//   return (
//   <CartContext.Provider value={{ cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, updateItemQuantity, getTotalAmount }}>
//   {children}
//   {/* <Cart cartItems={cartItems} /> */}
//    </CartContext.Provider>
//   ) 

// };

// const useCartContext = () => useContext(CartContext);

// export {CartContext, CartProvider, useCartContext };





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