import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ClickComponent from './ClickComponent';
import ColoredBlock from './ColoredBlock.js';


let time = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> 
          Hello {this.props.name}! 
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock ></Clock>
        <ClickComponent />
        <div className="main-content">
          <ColoredBlock />
        </div>
        <footer>Footer...</footer>
      </div>
    );
  }
}

export default App;
