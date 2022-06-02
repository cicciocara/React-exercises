/*Extract the logic to fetch a Github user's data 
from the GithubUser component from useEffect 03 into a
 custom hook called useGithubUser. */

import { UseGitHubUser } from './UseGitHubUser';

export function GitHubUser({ username }) {
  const { user, loading, error } = UseGitHubUser(username);

  return (
    <div>
      {error && <h2>there is an error, try again</h2>}
      {!loading && !error && (
        <div>
          <h2>UserName: {user && user.name}</h2>
          <h2>Id: {user && user.id}</h2>
        </div>
      )}
      {loading && <h2>Loading...</h2>}
    </div>
  );
}
