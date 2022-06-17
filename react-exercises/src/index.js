import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

import { store } from './state/Store';
import { incrementCounter, decrementCounter, resetCounter } from './state/CounterState';

//ReactDOM.render(<Root />, document.getElementById('root'));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(3));
store.dispatch(incrementCounter(1));
store.dispatch(resetCounter());
