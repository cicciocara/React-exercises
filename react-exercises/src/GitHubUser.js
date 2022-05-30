/*Extract the logic to fetch a Github user's data 
from the GithubUser component from useEffect 03 into a
 custom hook called useGithubUser. */

import { UseGitHubUser } from './UseGitHubUser';

export function GitHubUser({ username }) {
  const { user } = UseGitHubUser(username);

  return (
    <div>
      <h2>UserName: {user && user.name}</h2>
      <h2>Id: {user && user.id}</h2>
    </div>
  );
}
