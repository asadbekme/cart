import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems('createAsyncThunk'));
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;