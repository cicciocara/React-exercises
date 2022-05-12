import React from 'react';

export class ClickCounter extends React.Component {
  state = {
    counter: 0,
  };

  handleCounter = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleCounter}>Increment Counter</button>
      </div>
    );
  }
}
