import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

import { store } from './state/Store';
import { addTodo, editTodo, removeTodo } from './state/TodosReducer';
import { decrementCounter, incrementCounter } from './state/CounterState';

//ReactDOM.render(<Root />, document.getElementById('root'));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo(1, 'comprare il pane', false));
store.dispatch(incrementCounter(5));
store.dispatch(addTodo(2, 'lavare la macchina', true));
store.dispatch(addTodo(3, 'compilare i moduli', false));
store.dispatch(removeTodo(2));
store.dispatch(incrementCounter(10));
store.dispatch(removeTodo(1));
store.dispatch(editTodo(3, 'uccidere il vicino', true));
store.dispatch(decrementCounter(12));
