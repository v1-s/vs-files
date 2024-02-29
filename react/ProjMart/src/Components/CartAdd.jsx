function AddToCart({ product, quantity }) {
    const handleAddToCart = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const existingItem = cartItems.find((item) => item.productId === product.id);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cartItems.push({
          productId: product.id,
          productName: product.productName,
          quantity,
          // Add other properties like price if needed
        });
      }
  
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
  
    return (
      <button onClick={handleAddToCart}>Add to Cart</button>
    );
  }
  
  export default AddToCart;
  