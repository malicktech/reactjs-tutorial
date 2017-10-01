// @flow

import React from 'react';
import PropTypes from 'prop-types'; // ES6

import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ClickComponent from './ClickComponent';
import ColoredBlock from './ColoredBlock';
import Products from './Products';
import LoginControl from './LoginControl';
import NumberList from './NumberList';

const numbers = [1, 2, 3, 4, 5];

const producttest = [
  { id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const App = ({ name, nickname, email }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <LoginControl />
    </div>
    <p className="App-intro">
      Hello {name}! <br />
      nickname {nickname}!
      <br />
      email : {email}!
    </p>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Clock />
    <br />
    <NumberList mylist={producttest} />
    <br />
    <ClickComponent />
    <div className="main-content">
      <ColoredBlock />
    </div>
    <section>
      <Products />
    </section>
    <footer>Footer...</footer>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
};
// Specifies the default values for props:
App.defaultProps = {
  email: 'citizendiop@gmail.com',
};

export default App;
