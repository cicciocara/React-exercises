import { useCallback, useState } from 'react';

export function UseControlledForm() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleInput = useCallback(function handleInput(event) {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }, []);
  return {
    data,
    handleInput,
  };
}
