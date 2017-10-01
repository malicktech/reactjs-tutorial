import React from 'react';

/**
 * Développement JS moderne : REACT.js, FLUX, REDUX et GraphQL
 * https://www.youtube.com/watch?v=F0Ral7AJ1rs
 */

const store = { products: ['P1', 'P2'], users: [] };

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      {store.products.map(product => <Product name={product} />)}
    </div>
  );
}

export default Page1;

// /////////////////////////////////////////

class Product extends React.Component {
  state = {
    name: '',
    quantity: 0,
  };

  //     constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: '',
  //       quantity: 0,
  //     };
  //   }

  addToCart() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  render() {
    return (
      <div>
        {/*  jhhjkh */}
        <br />
        <h2>Product {this.props.name}</h2>
        <p>Quantity: {this.state.quantity}</p>
        <button onClick={() => this.addToCart()}>Add to cart</button>
      </div>
    );
  }
}
