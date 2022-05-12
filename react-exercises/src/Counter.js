import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementAmount };
      });
    }, this.props.incrementInterval);
  }

  /*the constructor is no longer required, 
  the difference is that the constructor is called before the rendering phase,
   DidAmount is instead called after the first rendering */

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
