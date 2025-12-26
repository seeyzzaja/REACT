import { useAsync } from "../Hooks/UseAsyn";
import type { User } from "../types/User";

function fetchUser(): Promise<User> {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json());
}

function UserFetcher() {
  const { data, loading, error } = useAsync<User>(fetchUser, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <h3>{data?.name}</h3>;
}

export default UserFetcher;
