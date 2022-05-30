import { useState, useEffect } from 'react';

export function UseGitHubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchingData() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error('user not found'));
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        return setUser(data);
      })
      .catch((error) => setError(error));
  }

  useEffect(() => {
    fetchingData();
  }, [username]);

  return {
    user,
    loading,
    error,
  };
}
