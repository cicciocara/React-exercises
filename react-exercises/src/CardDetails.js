/*Create a CarDetails uncontrolled form that uses the HTML Form API 
to allow the user to insert details about a car, such as the model,
the year and the color. Allow the form to receive a initialData prop 
that contains the default values of each input, 
and reset the form every time the initialData value changes. */

import { useEffect, useRef, useState } from 'react';

export function CardDetails({ initialData }) {
  const _formRef = useRef();

  useEffect(() => {
    _formRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={_formRef}>
        <input name='model' defaultValue={initialData.defaultModel} />
        <input name='year' type='number' defaultValue={initialData.defaultYear} />
        <input name='color' defaultValue={initialData.defaultColor} />
        <button>Submit</button>
      </form>
    </div>
  );
}
