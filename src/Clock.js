import React from 'react';

/**
 * https://reactjs.org/docs/state-and-lifecycle.html
 */
class Clock extends React.Component {
  // The constructor function is called when a class is instantiated, and it's a good place to put business that should happen during initialization.
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    // clear interval'id later when the component is unmounted
    clearInterval(this.timerID);
  }
  tick() {
    // method that will trigger React to update
    // use this.setState() to schedule updates to the component local state
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return <p className="App-clock">The time is {this.state.date.toLocaleTimeString()}.</p>;
  }
}

export default Clock;
