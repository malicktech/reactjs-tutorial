// @flow

import React from 'react';
import PropTypes from 'prop-types'; // ES6

import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ClickComponent from './ClickComponent';
import ColoredBlock from './ColoredBlock';
import Products from './Products';

const App = ({ name, nickname, email }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
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
