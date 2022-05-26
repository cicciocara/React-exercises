/* Rewrite the Counter component from State 1
 as a function component and add a side effect
  that initializes the interval as soon as the component renders,
   and clears it when the component unmounts. */

import React, { useEffect, useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
