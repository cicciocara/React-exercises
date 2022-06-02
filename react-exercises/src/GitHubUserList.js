/* Create a GithubUserList component that maintains an array of usernames, 
showing a GithubUser component for each username entered.
 The usernames should be added to the array using an input field and a button. */

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GitHubUser } from './GitHubUser';

export function GitHubUserList() {
  const [gitUser, setGitUser] = useState('');
  const [usernames, setUsernames] = useState([]);

  function handleInput(event) {
    setGitUser(event.target.value);
  }

  function addUsername() {
    setUsernames([...usernames, gitUser]);
  }

  return (
    <div>
      <input name='gitUser' value={gitUser} onChange={handleInput} />
      <button onClick={addUsername}>Add user</button>
      {usernames.map((user, index) => {
        return (
          <div key={user + index}>
            <li>
              <Link to={`${user}`}>github-user:{user}</Link>
            </li>
            <Outlet />
          </div>
        );
      })}
    </div>
  );
}
