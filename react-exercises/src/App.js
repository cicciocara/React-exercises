import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { TodoList } from './TodoList';
import { UncontrolledLogin } from './UncontrolledLogin';
import { Welcome } from './Welcome';

function onLogin(state) {
  return console.log(state);
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Login />
      </div>
    );
  }
}
