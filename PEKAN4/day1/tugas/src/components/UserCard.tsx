import type { User } from "../types/User";

interface UserCardProps {
  user: User;
  isOnline: boolean;
}

function UserCard({ user, isOnline }: UserCardProps) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default UserCard;
