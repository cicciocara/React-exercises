import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    this._interval = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementAmount };
      });
    }, this.props.incrementInterval);
  }

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
