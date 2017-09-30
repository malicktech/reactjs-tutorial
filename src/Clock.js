import React from 'react';

class Clock extends React.Component {
  // The constructor function is called when a class is instantiated, and it's a good place to put business that should happen during initialization.
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
      // clear interval'id later when the component is unmounted
    clearInterval(this.intervalID);
  }
  tick() {
      // method that will trigger React to update
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time}.
      </p>
    );
  }
} 

export default Clock;