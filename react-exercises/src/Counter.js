/* Rewrite the Counter component from State 1
 as a function component and add a side effect
  that initializes the interval as soon as the component renders,
   and clears it when the component unmounts. */

import React, { useEffect, useState } from 'react';
import { UseCounter } from './UseCounter';

export function Counter({ initialValue }) {
  const { counter, IncrementCounter, DecrementCounter, ResetCounter } = UseCounter(initialValue);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={IncrementCounter}>Increment Counter</button>
      <button onClick={DecrementCounter}>Decrement Counter</button>
      <button onClick={ResetCounter}>Reset Counter</button>
    </div>
  );
}
