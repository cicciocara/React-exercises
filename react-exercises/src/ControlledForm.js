/* Create a custom hook that keeps track of the state 
of a controlled form with the username and password inputs,
 and returns the current value 
 of the inputs as well as an event handler to update either input. */
import { UseControlledForm } from './UseControlledForm';

export function ControlledForm() {
  const { data, handleInput } = UseControlledForm();

  return (
    <div>
      <input name='username' value={data.username} onChange={handleInput} />
      <input name='password' value={data.password} type='password' onChange={handleInput} />
    </div>
  );
}
