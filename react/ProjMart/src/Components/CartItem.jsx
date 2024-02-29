import { useCartContext } from "./Context/Cart";
import { products } from "./products"; // Assuming products data is available

const CartItem = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCartContext();

  // Ensure product is valid before processing
  if (!product) {
    return null; // Return early if product is undefined or null
  }

  const productId = product.id;
  const productInCart = cart[productId];

  const handleAdd = () => {
    addToCart(product); // Ensure product is passed correctly
  };

  const handleRemove = () => {
    removeFromCart(productId); // Pass product ID for removal
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

export default CartItem;
