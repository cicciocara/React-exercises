/*Create a GithubUser component that fetches the data
 of the username passed as a prop, and renders some 
 of the data within a div tag.
  The API to query is https://api.github.com/users/${username}. */

import { useEffect, useState } from 'react';

export function GitHubUser({ username }) {
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

  return (
    <div>
      <h2>UserName: {user && user.name}</h2>
      <h2>Id: {user && user.id}</h2>
    </div>
  );
}
