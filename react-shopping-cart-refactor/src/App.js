// import useState
import React, { useReducer } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

const productReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return [action.list, ...state];
    default:
      return state
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.list];
    case "UPDATE":
      return action.list
    default:
      return state
  }
}
export default function App() {

  const [productState, dispatchProduct] = useReducer(productReducer, productsArr);

  const [cartState, dispatchCart] = useReducer(cartReducer, [])

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form products={productState} dispatchProduct={dispatchProduct} />
      <div className="products">
        <AllTheThings products={productState} setCart={dispatchCart} cartList={cartState} />
        <MyShoppingCart cartList={cartState} setCart={dispatchCart} />
      </div>
    </div>
  );
}
