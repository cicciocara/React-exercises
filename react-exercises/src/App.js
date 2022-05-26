import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Container } from './Container';
import { Counter } from './Counter';
import { DisplayLanguage } from './DisplayLanguage';
import { Hello } from './Hello';
import { InteractiveWelcome } from './InteractiveWelcome';
import { LanguageContext } from './LanguageContext';
import { Login } from './Login';
import { Sum } from './Sum';
import { TodoList } from './TodoList';
import { UncontrolledLogin } from './UncontrolledLogin';
import { Welcome } from './Welcome';

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
        <Counter />
      </div>
    );
  }
}
