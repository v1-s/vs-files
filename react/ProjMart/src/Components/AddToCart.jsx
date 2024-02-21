import { useCartContext } from "./Context/Cart";
import { products } from "./products";
const AddToCart = ({ product }) => {
   const { cart, addToCart, removeFromCart } = useCartContext();
  //  const productId = product ? product.id : null;
  const productId = product ? product.id : null;
  const productInCart = cart[productId];

  const handleAdd = () => {
    addToCart(product);
    
  };
  const handleRemove = () => {
    removeFromCart(product);
   
  };
  if (!productInCart) {
    return (
      <div>
        <button className="add-to-cart" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleRemove} className="add">
          -
        </div>
        {productInCart.quantity}
        <div className="add" onClick={handleAdd}>
          +
        </div>
        
      </div>
    );
  }
};

export default AddToCart;
