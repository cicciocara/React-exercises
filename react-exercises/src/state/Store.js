/*Modify the store so that it uses a root 
reducer that combines both the counter and todos reducers.
 Dispatch actions for both the counter and the todos. */

import { combineReducers, createStore } from 'redux';
import { counterReducer } from './CounterState';
import { todosReducer } from './TodosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);
