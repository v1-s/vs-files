import React from "react";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartPage from "../Cartpage";
// import {useCartContext} from './Context/Cart'; // Import useCartContext


const CartContext = React.createContext();
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (prevCart[product.id]) {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity += 1;
        newCart[product.id] = newProduct;
      } else {
        newCart[product.id] = {
          ...product,
          quantity: 1,
        };
      }
      return newCart;
    });
  };
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!prevCart[product.id]) return;
      else if (prevCart[product.id].quantity === 1) {
        delete newCart[product.id];
      } else {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity -= 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

 
  return (
    <CartContext.Provider value={{cart,setCart, addToCart, removeFromCart}}>
       {/* <addToCart product={{ id: 1, name: 'Product 1' }} />
      <Link to="/cartpage">Go to Cart</Link> {/* Or use programmatic navigation */}
      <CartContextProvider/>
      {children}
    </CartContext.Provider>
  );
}
// export const useCartContext = () => useContext(CartContext);
export default CartContextProvider;
