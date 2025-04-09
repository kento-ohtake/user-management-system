//UserList.tsx
import { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[]; // ユーザーの配列
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
