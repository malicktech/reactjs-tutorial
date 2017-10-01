// @flow

import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Header from './Header';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </div>
  </Router>
);

export default App;
