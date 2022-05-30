import { useState, useEffect } from 'react';

export function UseGitHubUser(username) {
  const [user, setUser] = useState(null);

  function fetchingData() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setUser(data);
      });
  }

  useEffect(() => {
    fetchingData();
  }, [username]);

  return {
    user,
  };
}
