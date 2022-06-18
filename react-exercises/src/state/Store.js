/*Create a store that uses CounterReducer as its root reducer,
 and dispatch an INCREMENT action on the store. Verify that the state updates as expected. */

import { createStore } from 'redux';
import { counterReducer } from './CounterState';
import { todosReducer } from './TodosReducer';

export const store = createStore(todosReducer);
