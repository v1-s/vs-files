import React from 'react';
import Cart from './Cart';
import  {useParams}  from 'react-router-dom';
const CartWrapper = ({ match, selectedId, setSelectedId }) => {
    // ...
  
  const { id } = useParams();

  return <Cart id={id} selectedId={selectedId} setSelectedId={setSelectedId} />
};

export default CartWrapper;