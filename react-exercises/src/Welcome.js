import React from 'react';
import { Age } from './Age';

export function Welcome({ name, age }) {
  return (
    <div className='welcome'>
      <p>Welcome {name}!</p>
      <Age age={age}></Age>
    </div>
  );
}
