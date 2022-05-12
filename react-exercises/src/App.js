import React from 'react';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
      </div>
    );
  }
}
