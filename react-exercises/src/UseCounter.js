/*Create a custom hook useCounter that keeps
track of the state of a counter, and returns
the current value of the counter as well as
three functions to increment, decrement and reset the counter. */

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
