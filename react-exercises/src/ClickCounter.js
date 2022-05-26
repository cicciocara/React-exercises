/* Add a side effect to the Counter component
 from useState 01 that calls a onCounterChange 
 function with the current value of the counter
  every time value of the counter changes. 
  The function should be received as a prop.  */

import React, { useEffect, useState } from 'react';

export function ClickCounter({ onChangeCounter }) {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    onChangeCounter(counter);
  }, [counter]);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounter}>Increment Counter</button>
    </div>
  );
}
