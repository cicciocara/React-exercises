/*Modify the Login component from Forms 03
 so that the "login" button background color is "red"
  when the inputted password's length is shorter than 8 characters, green otherwise.*/

import React, { useState } from 'react';

export function Login({ actualState }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleInput(event) {
    const { name, value, type, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <div>
      <input name='username' value={data.username} onChange={handleInput}></input>
      <input name='password' type='password' value={data.password} onChange={handleInput}></input>
      <input name='remember' type='checkbox' checked={data.remember} onChange={handleInput}></input>
      {(!data.username || !data.password) && <button disabled={true}>Login</button>}
      {data.username && data.password && <button onClick={() => actualState(data)}>Login</button>}
    </div>
  );
}
