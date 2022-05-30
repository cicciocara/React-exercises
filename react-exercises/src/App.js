import React from 'react';

import { ControlledForm } from './ControlledForm';

function onLogin(state) {
  return console.log(state);
}

function onChangeCounter(counter) {
  console.log(`Current counter is now:  ${counter}`);
}

const numbers = [1, 2, 3, 4, 5];

export class App extends React.Component {
  state = {
    language: 'en',
  };

  handleSelect = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <ControlledForm />
      </div>
    );
  }
}
