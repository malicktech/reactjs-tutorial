import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';

// import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'

/**
 * Développement JS moderne : REACT.js, FLUX, REDUX et GraphQL
 * https://www.youtube.com/watch?v=F0Ral7AJ1rs
 */
/** https://github.com/reactjs/redux/tree/master/examples/counter */
/**
 * Store
 */
const initialState2 = [
  {
    products: [{ id: 0, name: 'P1', quantity: 0 }, { id: 1, name: 'P2', quantity: 0 }],
    users: [],
  },
];
const initialState = [{ id: 0, name: 'P1', quantity: 0 }, { id: 1, name: 'P2', quantity: 0 }];

// reducers : une fonction qui permet de modifier le store
// state : donée du store initiale
// return nouvelle données
function products(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      state[action.index].quantity += 1;
      return state;
    case 'DECREMENT':
      state[action.index].quantity -= 1;
      return state;

    default:
      return state;
  }
}
// reducers
function users(state = initialState2, action) {
  console.log(action);
  return state;
}

// le store est composer de reducers
const store = createStore(
  combineReducers({
    products,
    users,
  }),
);

// dispatch : send action to store

/* 
    Components
 */
function Header() {
  return (
    <div>
      <h1>
        Product in cart :
        {store
          .getState()
          .products.reduce((productA, productB) => productA.quantity + productB.quantity)}
      </h1>
    </div>
  );
}
function Page1() {
  return (
    <div>
      <Header />
      {store
        .getState()
        .products.map(product => (
          <Product name={product.name} quantity={product.quantity} id={product.id} />
        ))}
    </div>
  );
}

export default Page1;

// /////////////////////////////////////////
function Product(props) {
  return (
    <div>
      {/*  coments */}
      <br />
      <h2>Product {props.name}</h2>
      <p>Quantity: {props.quantity}</p>
      {/* au click, on envoyer event sur le store 
    ADD_TO_CART : INCREMENT / 
    */}
      <button
        onClick={() =>
          store.dispatch({
            type: 'INCREMENT',
            index: props.id,
          })}
      >
        Add to cart
      </button>
      <button
        onClick={() =>
          store.dispatch({
            type: 'DECREMENT',
            index: props.id,
          })}
      >
        Decrement
      </button>
    </div>
  );
}

function render() {
  ReactDOM.render(<Page1 />, document.getElementById('root'));
}

// placer un écouterur pour voir ls changement sur le store
// met à jour l'app dès qu'il y'a modif sur le store
store.subscribe(render);
