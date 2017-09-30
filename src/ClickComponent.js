import React from 'react';

class ClickComponent extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ClickComponent;