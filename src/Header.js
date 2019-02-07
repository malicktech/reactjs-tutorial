import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <li>
          <Link className="btn" to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="btn" to={'/page1'}>
            Page1
          </Link>
        </li>
        <li>
          <Link className="btn" to={'/page2'}>
            Page2
          </Link>
        </li>
        <li>
          <Link className="btn" to={'/Tutorial'}>
            Tutorial
          </Link>
        </li>
      </div>
    );
  }
}

export default Header;
