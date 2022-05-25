import React, { useState } from 'react';

export function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter((c) => c + 1);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounter}>Increment Counter</button>
    </div>
  );
}
