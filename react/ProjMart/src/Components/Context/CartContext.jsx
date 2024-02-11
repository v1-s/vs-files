import React from 'react';

const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const checkout = () => {
    // Implement checkout logic here
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleRemoveItem, updateQuantity, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };