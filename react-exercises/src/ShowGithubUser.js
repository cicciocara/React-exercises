import { useParams } from 'react-router-dom';
import { GitHubUser } from './GitHubUser';

export function ShowGithubUser() {
  const { username = 'cicciocara' } = useParams();

  return (
    <div>
      <GitHubUser username={username} />
    </div>
  );
}
