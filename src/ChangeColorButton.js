import React from 'react';

/**
 * have a button component that changes the background color of its parent component when clicked.
 */
class ChangeColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick() {
      // In order to be able to refer to  this  in our callback, we'll need to explicitly bind in on our instance. 
    this.props.clickHandler();
    console.log('clicked');
  }
  render() {
    return (
        <button onClick={this.handleClick}>I dont like {this.props.currentColor}</button>    );
  }
} 

export default ChangeColorButton;