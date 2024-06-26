import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <span>{item.productName} - ${item.price}</span>
              <span>
                <button onClick={() => handleDecrement(index)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrement(index)}>+</button>
              </span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;





































// import React, { useContext, useState} from 'react';
// import { CartContext } from '../Components/CartContext';
// import Footer from '../Components/Mfooter';
// import './CartStyle.css';
// const Cart = ({inputValue}) => {
//   const { state, dispatch, cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, getTotalAmount, updateItemQuantity} = useContext(CartContext);
 
//   const totalAmount = getTotalAmount();
//   console.log(totalAmount);

//   const formattedTotalAmount = Number(totalAmount).toFixed(2);
//   console.log('Cart Items:', cartItems);
  

//   if (cartItems.length === 0) {
//     return(
//       <div className='pageTitle'>
//               <h1 style={{height:'260px', paddingTop:'100px'}}>Your Cart is Empty</h1>
//               {/* <Footer/> */}
//       </div>

//     )
//   }

//   const handleQuantityChange = (itemId, newQuantity) => {
//     updateItemQuantity(itemId, newQuantity);
//   };

//   return (
//     <div className='CartPage'>
//        <h2 style={{height:'30px',paddingTop:'100px'}} >Shopping Cart</h2>
//             <div className='cartDivisions'>      
//             <div className='displayCartItems'> 

//             {cartItems.map((item) => (
//             <div key={item.id} className='cartItems'>
//           <div className='cartProduct'>
//                 <div className='productImage'><img src={item.img}></img></div>
//                 <div className='itemDetails'>{item.name}
//                     <div className='itemPrice'> <span>${item.price.toFixed(2)}*{item.quantity}{inputValue}</span><p>{item.price}</p></div> 
//                 </div>
//           </div>
//           <div className='itemIcons'>
//                 <div className='itemQuantity'>
//                  <button onClick={() => increaseItemQuantity(item.id)} className='increase'><span id='add'>+</span></button>         
//                  <button onClick={() => decreaseItemQuantity(item.id)} className='decrease'><span id='minus'>-</span></button>
//                 </div>
//                <div className='crossIcon'><span onClick={() => removeItemFromCart(item.id)}>&#128938;</span></div> 
//              </div>            
          

//         </div>
//       ))}


//     </div>     
//     <div className='cartTotal'>
//       <h5>Cart Summary</h5>
//       <hr/>
//         <span>Total Price:</span>
//         <p>${getTotalAmount()}</p>
//     </div>    
//     </div>
//     <Footer/>
// </div>
//   );
// };

// export default Cart;
























// import React, { useContext,useEffect } from 'react';
// import {CartContext,CartProvider} from '../Components/CartContext';
// import { products } from './products';
// import Footer from './Mfooter';
// import  './CartStyle.css';

// const Cart = ({inputValue}) => {
//   const {cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     increaseItemQuantity,
//     decreaseItemQuantity,
//     updateItemQuantity,
//     getTotalAmount,
//   } = useContext(CartContext);


//   console.log("Cart Items",cartItems);
//   const totalAmount = getTotalAmount();
//   console.log(totalAmount);

//   const formattedTotalAmount = Number(totalAmount).toFixed(2);
//   console.log('Cart Items:', cartItems);
//   useEffect(() => {
//      console.log('Cart items updated:', cartItems);
//   },[cartItems]);
//   const handleQuantityChange = (itemId, newQuantity) => {
//     updateItemQuantity(itemId, newQuantity);
//   };
//   if (cartItems.length === 0) {
//     return(
//       <div className='pageTitle'>
//               <h1 style={{height:'260px', paddingTop:'100px'}}>Your Cart is Empty</h1>
//               {/* <Footer/> */}
//       </div>

//     )
//   }

  

//   return (
//     <div className='CartPage'>
//        <h2 style={{height:'30px',paddingTop:'100px'}} >Shopping Cart</h2>
      
//             <div className='cartDivisions'>      
//             <div className='displayCartItems'> 

//             {cartItems.map((item) => (
//             <div key={item.id} className='cartItems'>
//           <div className='cartProduct'>
//                 <div className='productImage'><img src={item.img}></img></div>
//                 <div className='itemDetails'>{item.name}
//                     <div className='itemPrice'> <span>${item.price.toFixed(2)}*{item.quantity}{inputValue}</span><p>{item.price}</p></div> 
//                 </div>
//           </div>
//           <div className='itemIcons'>
//                 <div className='itemQuantity'>
//                  <button onClick={() => increaseItemQuantity(item.id)} className='increase'><span id='add'>+</span></button>         
//                  <button onClick={() => decreaseItemQuantity(item.id)} className='decrease'><span id='minus'>-</span></button>
//                 </div>
//                <div className='crossIcon'><span onClick={() => removeItemFromCart(item.id)}>&#128938;</span></div> 
//              </div>            
          

//         </div>
//       ))}


//     </div>     
//     <div className='cartTotal'>
//       <h5>Cart Summary</h5>
//       <hr/>
//         <span>Total Price:</span>
//         <p>${getTotalAmount()}</p>
//     </div>    
//     </div>
//     {/* <Footer/> */}
// </div>
//   );
// };

// export default Cart;

































// import React, { useContext } from 'react';
// import {CartContext} from './CartContext';
// import Footer from './Mfooter';
// import  './CartStyle.css';

// const Cart = ({inputValue,cartItems}) => {
//   const { state, dispatch, cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, getTotalAmount, updateItemQuantity } = useContext(CartContext);

//   const totalAmount = getTotalAmount();
//   console.log(totalAmount);

//   const formattedTotalAmount = Number(totalAmount).toFixed(2);
//   console.log('Cart Items:', cartItems);

//   if (cartItems.length === 0) {
//     return(
//       <div className='pageTitle'>
//               <h1 style={{height:'260px', paddingTop:'100px'}}>Your Cart is Empty</h1>
//               <Footer/>
//       </div>

//     )
//   }

//   const handleQuantityChange = (itemId, newQuantity) => {
//     updateItemQuantity(itemId, newQuantity);
//   };

//   return (
//     <div className='CartPage'>
//        <h2 style={{height:'30px',paddingTop:'100px'}} >Shopping Cart</h2>
//             <div className='cartDivisions'>      
//             <div className='displayCartItems'> 

//             {cartItems.map((item) => (
//             <div key={item.id} className='cartItems'>
//           <div className='cartProduct'>
//                 <div className='productImage'><img src={item.img}></img></div>
//                 <div className='itemDetails'>{item.name}
//                     <div className='itemPrice'> <span>${item.price.toFixed(2)}*{item.quantity}{inputValue}</span><p>{item.price}</p></div> 
//                 </div>
//           </div>
//           <div className='itemIcons'>
//                 <div className='itemQuantity'>
//                  <button onClick={() => increaseItemQuantity(item.id)} className='increase'><span id='add'>+</span></button>         
//                  <button onClick={() => decreaseItemQuantity(item.id)} className='decrease'><span id='minus'>-</span></button>
//                 </div>
//                <div className='crossIcon'><span onClick={() => removeItemFromCart(item.id)}>&#128938;</span></div> 
//              </div>            
          

//         </div>
//       ))}


//     </div>     
//     <div className='cartTotal'>
//       <h5>Cart Summary</h5>
//       <hr/>
//         <span>Total Price:</span>
//         <p>${getTotalAmount()}</p>
//     </div>    
//     </div>
//     <Footer/>
// </div>
//   );
// };

// export default Cart;