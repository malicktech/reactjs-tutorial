import React from 'react';
import ChangeColorButton from './ChangeColorButton';

/**
 * The state of our UI, its color, lives in  ColoredBlock
 */
class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.changeColor = this.changeColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: 'red',
      isToggleOn: true,
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'red' ? 'blue' : 'red',
    }));
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        <div style={{ height: '200px', width: '200px', backgroundColor: this.state.color }}>
          <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color} />
        </div>
      </div>
    );
  }
}

export default ColoredBlock;
