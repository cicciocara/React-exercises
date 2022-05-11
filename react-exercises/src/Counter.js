import React from 'react';

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super();

    this._interval = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
