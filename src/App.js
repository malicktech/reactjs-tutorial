// @flow

import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ClickComponent from './ClickComponent';
import ColoredBlock from './ColoredBlock';
import Products from './Products';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello {this.props.name}! <br />
          nickname {this.props.nickname}!
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
  }
}

export default App;
