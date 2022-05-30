/*Modify the useCounter custom hook from Custom Hooks 01 
to use the useCallback to memoize the functions used to increment,
decrement and reset the counter.*/

import { useCallback, useState } from 'react';

export function UseCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const IncrementCounter = useCallback(function IncrementCounter() {
    setCounter((c) => c + 1);
  }, []);

  const DecrementCounter = useCallback(function DecrementCounter() {
    setCounter((c) => c - 1);
  }, []);

  const ResetCounter = useCallback(function ResetCounter() {
    setCounter(initialValue);
  }, []);

  return {
    counter: counter,
    IncrementCounter,
    DecrementCounter,
    ResetCounter,
  };
}
